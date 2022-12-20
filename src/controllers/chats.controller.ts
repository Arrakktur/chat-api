import { Body, Controller, Get, Head, Param, Post, Req } from "@nestjs/common";
import { ChatsService } from "../services/chats.service";
import { GetChatDto } from "../dto/get-chat.dto";

@Controller('chats')
export class ChatsController {

  constructor(private chatsService: ChatsService) {}

  /**
   * Получение списка чатов
   */
  @Get()
  getAll(@Req() request, @Param() dto: GetChatDto){
    return this.chatsService.getAll(request.headers.authorization);
  }

  /**
   * Создание чата
   */
  @Post()
  createChat(){}
}