import { Injectable } from "@nestjs/common";
import { SignInDto } from "../dto/sign-in.dto";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../models/users.model";
import { JwtService } from "@nestjs/jwt";
import { CheckJwtDto } from "../dto/check-jwt.dto";
import { LoginUserDto } from "../dto/login-user.dto";
import { SignUpDto } from "../dto/sign-up.dto";

@Injectable()
export class AuthService {

  constructor(@InjectModel(User) private userRepository: typeof User, private jwtService: JwtService) {
  }

  /**
   * Регистрация пользователя
   * @param {SignUpDto} dto Параметры пользователя
   */
  async signUp(dto: SignUpDto): Promise<User | false> {
    const isValid = !await this.validateUserLogin(dto);
    if (!isValid) {
      return false;
    }
    return await this.userRepository.create(dto);
  }

  /**
   * Првоерка на суцществование пользователя по логину
   * @param {LoginUserDto} dto Логин пользователя
   */
  async validateUserLogin(dto: LoginUserDto): Promise<boolean> {
    const isValid = await this.userRepository.findOne({ where: { login: dto.login } });
    return Boolean(isValid);
  }

  /**
   * Проверка на существования пользователя с логином и паролем
   * @param {SignInDto} dto Параметры пользователя
   */
  async validateUser(dto: SignInDto): Promise<boolean> {
    const isValid = await this.userRepository.findOne({ where: { login: dto.login, password: dto.password } });
    return Boolean(isValid);
  }

  /**
   * Создание JWT
   * @param {SignInDto} dto Параметры пользователя
   */
  createJWT(dto: SignInDto): string {
    const jwt = this.jwtService.sign({ login: dto.login, password: dto.password }, { privateKey: "key" });
    this.userRepository.update({ token: jwt }, { where: { login: dto.login, password: dto.password } });
    return jwt;
  }

  /**
   * Проверка jwt
   * @param {CheckJwtDto} dto jwt
   */
  async checkJwt(dto: CheckJwtDto): Promise<boolean> {
    const isValid = await this.userRepository.findOne({ where: { token: dto.jwt } });
    return Boolean(isValid);
  }
}
