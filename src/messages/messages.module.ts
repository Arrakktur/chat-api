import {Module} from "@nestjs/common";
import {MessagesService} from "./messages.service";
import {MessagesController} from "./messages.controller";

@Module({
    imports: [MessagesModule],
    providers: [MessagesService],
    controllers: [MessagesController],
})
export class MessagesModule {

}