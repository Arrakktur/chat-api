import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../models/users.model";
import { LoginUserDto } from "../dto/login-user.dto";

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRepository: typeof User) {
  }

  /**
   * Получение списка всех пользователей
   */
  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  /**
   * Получение пользователя по токену
   * @param {string} token токен пользователя
   */
  async getUserToken(token: string): Promise<User> {
    return await this.userRepository.findOne({where: { token: token }});
  }

  /**
   * Получение пользователя по подстроке логина
   * @param {LoginUserDto} dto Подстрока логина
   */
  async getPartUsers(dto: LoginUserDto): Promise<any>{
    return (await this.userRepository.findAll()).filter((user) => {
      return user.dataValues.login.indexOf(dto.login) !== -1;
    })
  }
}
