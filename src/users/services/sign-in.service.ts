import { Injectable } from "@nestjs/common";
import { SignInDto } from "../dto/sign-in.dto";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class SignInService{

  constructor(private authService: AuthService) {}

  /**
   * Авторизация пользователя
   * @param {SignInDto} dto Параметры пользователя
   */
  async signIn(dto: SignInDto): Promise<string | false> {
    const isValid = await this.authService.validateUser(dto);
    if (!isValid) {
      return false;
    }
    const jwt = this.authService.createJWT(dto);
    return jwt;
  }
}