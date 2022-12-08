import { Module } from '@nestjs/common';
import { MessagesModule } from "./moduls/messages.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {UsersModule} from "./moduls/users.module";
import {ConfigModule} from "@nestjs/config";
import {User} from "./models/users.model";
import { ChatsModule } from "./moduls/chats.module";
import { Chat } from "./models/chat.models";
import { Message } from "./models/message.model";
import { Roster } from "./models/roster.model";
import { StatusMessage } from "./models/status_messages.model";

@Module({
  imports: [
      MessagesModule,
      UsersModule,
      ChatsModule,
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
          models: [User, Chat, Message, Roster, StatusMessage],
          autoLoadModels: true,
      })
  ],
})
export class AppModule {}
