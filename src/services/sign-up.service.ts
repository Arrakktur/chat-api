import { Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SignUpDto } from "../dto/sign-up.dto";
import { User } from "../models/users.model";

@Injectable()
export class SignUpService{

  constructor(private authService: AuthService) {}

  /**
   * Регистрация пользователя
   * @param {SignUpDto} dto Параметры пользователя
   */
  async signUp(dto: SignUpDto): Promise<boolean | User> {
    return await this.authService.signUp(dto);
  }
}