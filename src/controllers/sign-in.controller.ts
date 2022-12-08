import { Body, Controller, Get, Header, Post } from "@nestjs/common";
import { SignInDto } from "../dto/sign-in.dto";
import { SignInService } from "../services/sign-in.service";

@Controller('signIn')
export class SignInController {

  constructor(private signInService: SignInService) {}

  /**
   * Авторизация пользователя
   * @param {SignInDto} dto Параметры пользователя
   */
  @Post()
  async signIn(@Body() dto: SignInDto): Promise<string | false>{
    const response = await this.signInService.signIn(dto);
    return JSON.stringify(response);
  }
}