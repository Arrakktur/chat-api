import { Body, Controller, Get, Header, Post } from "@nestjs/common";
import { SignUpDto } from "../dto/sign-up.dto";
import { SignUpService } from "../services/sign-up.service";
import { User } from "../models/users.model";

@Controller('signUp')
export class SignUpController {

  constructor(private signUpService: SignUpService) {}

  /**
   * Регистрация пользователя
   * @param {SignUpDto} dto Параметры пользователя
   */
  @Post()
  async signUp(@Body() dto: SignUpDto): Promise<boolean | User>{
    return await this.signUpService.signUp(dto);
  }
}