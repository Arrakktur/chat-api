import { Module } from '@nestjs/common';
import { MessagesModule } from "./messages/messages.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from "./users/users.module";
import {ConfigModule} from "@nestjs/config";
import {User} from "./users/models/users.model";
import { AuthModule } from "./auth/auth.module";

@Module({
  imports: [
      MessagesModule,
      UsersModule,
      ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`
      }),
      SequelizeModule.forRoot({
          dialect: 'sqlite',
          host: process.env.DATABASE_HOST,
          port: Number(process.env.DATABASE_PORT),
          username: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_DB,
          models: [User],
          autoLoadModels: true,
      })
  ],
})
export class AppModule {}
