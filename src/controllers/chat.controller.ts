import { Body, Controller, Get, Post } from "@nestjs/common";

@Controller('chats')
export class ChatController {

  constructor() {}

  /**
   * Получение списка чатов
   */
  @Get()
  getAll(){
    return false;
  }
}