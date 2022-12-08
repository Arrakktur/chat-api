import { Body, Controller, Get, Header, Post } from "@nestjs/common";
import { SignUpDto } from "../dto/sign-up.dto";
import { SignUpService } from "../services/sign-up.service";

@Controller('signUp')
export class SignUpController {

  constructor(private signUpService: SignUpService) {}

  /**
   * Регистрация пользователя
   * @param {SignUpDto} dto Параметры пользователя
   */
  @Post()
  async signUp(@Body() dto: SignUpDto): Promise<boolean>{
    return await this.signUpService.signUp(dto);
  }
}