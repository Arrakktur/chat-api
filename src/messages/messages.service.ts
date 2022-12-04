import { Injectable } from '@nestjs/common';
import {SendMessageDto} from "./dto/send-message.dto";
import {UpdateMessageDto} from "./dto/update-message.dto";

@Injectable()
export class MessagesService {
    private messages = [];

    getAll(): string {
        return 'getAll';
    }

    getById(id: number): string {
        return `getById ${id}`;
    }

    sendMessage(sendMessageDto: SendMessageDto): string {
        return 'sendMessage';
    }

    removeMessage(id: number): string {
        return `removeMessage ${id}`;
    }

    updateMessage(UpdateMessageDto: UpdateMessageDto, id: number): string {
        return `updateMessage ${id}`;
    }
}
