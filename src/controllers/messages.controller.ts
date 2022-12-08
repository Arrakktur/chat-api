import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Redirect} from '@nestjs/common';
import {SendMessageDto} from "../dto/send-message.dto";
import {UpdateMessageDto} from "../dto/update-message.dto";
import {MessagesService} from "../services/messages.service";

@Controller('messages')
export class MessagesController {

    constructor(private readonly messagesService: MessagesService){}

    /**
     * Получение всех сообщений
     */
    @Get()
    getAll(): string{
        return this.messagesService.getAll();
    }

    /**
     * Получение сообщения по id
     * @param {number} id id сообщения
     */
    @Get(':id')
    getById(@Param('id') id: number): string{
        return this.messagesService.getById(id);
    }

    /**
     * Отправка сообщения
     * @param {SendMessageDto} sendMessageDto параметры отправенного сообщеняи
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    sendMessage(@Body() sendMessageDto: SendMessageDto): string{
        return this.messagesService.sendMessage(sendMessageDto);
    }

    /**
     * Удаление сообщения
     * @param {number} id id сообщения
     */
    @Delete(':id')
    removeMessage(@Param('id') id: number): string{
        return this.messagesService.removeMessage(id);
    }

    /**
     * Редактирование сообщения
     * @param {UpdateMessageDto} updateMessageDto Параметры нового сообщения
     * @param {number} id id сообщения
     */
    @Put(':id')
    updateMessage(@Body() updateMessageDto: UpdateMessageDto, @Param('id') id: number): string{
        return this.messagesService.updateMessage(updateMessageDto, id);
    }
}
