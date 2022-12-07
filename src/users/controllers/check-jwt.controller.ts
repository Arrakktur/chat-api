import { Body, Controller, Post } from "@nestjs/common";
import { CheckJwtDto } from "../dto/check-jwt.dto";
import { CheckJwtService } from "../services/check-jwt.service";

@Controller('checkJwt')
export class CheckJwtController {

  constructor(private checkJwtService: CheckJwtService) {}

  /**
   * Запрос на проверку JWT
   * @param {CheckJwtDto} checkJwtDto jwt
   */
  @Post()
  checkJwt(@Body() dto: CheckJwtDto) {
    return this.checkJwtService.checkJwt(dto);
  }
}