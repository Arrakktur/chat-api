import { Injectable } from "@nestjs/common";
import { CheckJwtDto } from "../dto/check-jwt.dto";
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class CheckJwtService{

  constructor(private authService: AuthService) {}

  /**
   * Проверка jwt
   * @param {CheckJwtDto} checkJwtDto jwt
   */
  async checkJwt(dto: CheckJwtDto): Promise<boolean>{
    const isValid = await this.authService.checkJwt(dto);
    return isValid;
  }
}