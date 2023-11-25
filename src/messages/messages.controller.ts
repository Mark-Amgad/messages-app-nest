import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  private messagesService: MessagesService;
  constructor(MessagesService: MessagesService) {
    this.messagesService = MessagesService;
  }
  @Get('/')
  getAll() {
    return this.messagesService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    const message = await this.messagesService.getOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }

  @Post('/')
  creatOne(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
}
