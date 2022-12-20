import { Module } from "@nestjs/common";
import { ChatsController } from "../controllers/chats.controller";
import { ChatsService } from "../services/chats.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Chat } from "../models/chat.models";
import { Roster } from "../models/roster.model";
import { UsersService } from "../services/users.service";
import { User } from "../models/users.model";

@Module({
  controllers: [ChatsController],
  providers: [ChatsService],
  imports: [SequelizeModule.forFeature([Chat, Roster, User])]
})
export class ChatsModule {
}