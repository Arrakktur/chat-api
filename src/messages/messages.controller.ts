import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {SendMessageDto} from "./dto/send-message.dto";
import {UpdateMessageDto} from "./dto/update-message.dto";

@Controller('messages')
export class MessagesController {

    @Get()
    getAll(): string{
        return 'getAll';
    }

    @Get(':id')
    getById(@Param('id') id: number): string{
        return 'getOne ' + id;
    }

    @Post()
    sendMessage(@Body() sendMessageDto: SendMessageDto): string{
        return 'send Message ' + sendMessageDto.text + sendMessageDto.date;
    }

    @Delete(':id')
    removeMessage(@Param('id') id: number): string{
        return 'delete ' + id;
    }

    @Put(':id')
    updateMessage(@Body() updateMessageDto: UpdateMessageDto, @Param('id') id: number): string{
        return 'update ' + id;
    }
}
