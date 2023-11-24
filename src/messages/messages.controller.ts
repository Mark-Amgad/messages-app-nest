import { Controller, Get, Post, Body, Param } from '@nestjs/common';
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
  getOne(@Param('id') id: number) {
    return this.messagesService.getOne(id);
  }

  @Post('/')
  creatOne(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }
}
