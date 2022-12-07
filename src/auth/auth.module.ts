import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../users/models/users.model";
import { JwtModule, JwtService } from "@nestjs/jwt";

@Module({
  providers: [
    AuthService,
  ],
  exports: [
    AuthService,
  ],
  imports: [
    SequelizeModule.forFeature([User]),
    JwtModule,
  ]
})
export class AuthModule {}