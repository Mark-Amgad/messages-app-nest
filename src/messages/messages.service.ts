import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
export class MessagesService {
  private messagesRepository: MessagesRepository;
  constructor(MessagesRepository: MessagesRepository) {
    this.messagesRepository = MessagesRepository;
  }
  getAll() {
    return this.messagesRepository.getAll();
  }

  getOne(id: number) {
    return this.messagesRepository.getOne(id);
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
