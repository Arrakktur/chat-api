import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Chat } from "../models/chat.models";
import { Roster } from "../models/roster.model";
import { UsersService } from "./users.service";
import { User } from "../models/users.model";

@Injectable()
export class ChatsService {

  constructor(
    @InjectModel(Chat) private chatRepository: typeof Chat,
    @InjectModel(Roster) private rosterRepository: typeof Roster,
    @InjectModel(User) private userRepository: typeof User) {
  }

  /**
   * Получение списка чатов по токену
   * @param {string} token токен пользователя
   * @param {number} limit количество сообщений
   */
  async getAll(token: string, limit: number = 0) {
    // todo вот это говно, но я все еще разбираюсь с orm
    // список пользователей
    const user = await this.userRepository.findOne({where: { token: token }});
    if (!user){
      return false;
    }
    const rosters_chats = (await this.rosterRepository.findAll()).filter((roster) => {
      return roster.dataValues.id_user === user.dataValues.id;
    }).map((roster) => {
      return roster.dataValues.id_chat;
    })
    const rosters_users = (await this.rosterRepository.findAll()).filter((roster) => {
      return roster.dataValues.id_user === user.dataValues.id;
    }).map((roster) => {
      return roster.dataValues.id_user;
    })
    // список всех чатов
    const chats = (await this.chatRepository.findAll()).filter((chat) => {
      return rosters_chats.includes(chat.dataValues.id);
    }).map((chat) => {
      chat.title = 'Название чата';
      chat.lastMessage = 'Последнее сообщение';
      chat.avatar = 'https://cdn4.iconfinder.com/data/icons/business-and-office-circle-flat-vol-4/100/chat__comment__message__user__avatar-512.png';
      return chat;
    })

    return chats;
  }
}