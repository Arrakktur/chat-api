import { Module } from "@nestjs/common";
import { UsersController } from "./controllers/users.controller";
import { UsersService } from "./services/users.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./models/users.model";
import { SignInController } from "./controllers/sign-in.controller";
import { SignInService } from "./services/sign-in.service";
import { AuthModule } from "../auth/auth.module";
import { CheckJwtController } from "./controllers/check-jwt.controller";
import { CheckJwtService } from "./services/check-jwt.service";

@Module({
    controllers: [UsersController, SignInController, CheckJwtController],
    providers: [UsersService, SignInService, CheckJwtService],
    imports: [
        SequelizeModule.forFeature([User]),
        AuthModule,
    ]
})
export class UsersModule {}