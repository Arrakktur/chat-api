import {Module} from "@nestjs/common";
import {MessagesService} from "../services/messages.service";
import {MessagesController} from "../controllers/messages.controller";

@Module({
    imports: [MessagesModule],
    providers: [MessagesService],
    controllers: [MessagesController],
})
export class MessagesModule {

}