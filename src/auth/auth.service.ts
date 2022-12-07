import { Injectable } from '@nestjs/common';
import { SignInDto } from "../users/dto/sign-in.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../users/models/users.model";
import { JwtService } from "@nestjs/jwt";
import { CheckJwtDto } from "../users/dto/check-jwt.dto";

@Injectable()
export class AuthService {

  constructor(@InjectModel(User) private userRepository: typeof User, private jwtService: JwtService){}

  /**
   * Проверка на существования пользователя
   * @param {SignInDto} dto Параметры пользователя
   */
  async validateUser(dto: SignInDto): Promise<boolean> {
    const isValid = await this.userRepository.findOne({where: {login: dto.login, password: dto.password}});
    return Boolean(isValid);
  }

  /**
   * Создание JWT
   * @param {SignInDto} user Параметры пользователя
   */
  createJWT(user: SignInDto): string {
    const jwt = this.jwtService.sign({login: user.login, password: user.password}, {privateKey: 'key'});
    this.userRepository.update({token: jwt},{where: {login: user.login, password: user.password}});
    return jwt;
  }

  /**
   * Проверка jwt
   * @param {CheckJwtDto} dto jwt
   */
  async checkJwt(dto: CheckJwtDto): Promise<boolean> {
    const isValid = await this.userRepository.findOne({where: {token: dto.jwt}});
    return Boolean(isValid);
  }
}
