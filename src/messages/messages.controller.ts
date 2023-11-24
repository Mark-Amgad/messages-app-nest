import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get('/')
  getAllMessages() {
    return 'Hello';
  }

  @Post('/')
  creatOne(@Body() body: any) {
    return {
      msg: 'post request',
      values: body.name,
    };
  }
}
