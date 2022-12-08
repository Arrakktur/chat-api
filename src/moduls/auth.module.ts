import { Module } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../models/users.model";
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