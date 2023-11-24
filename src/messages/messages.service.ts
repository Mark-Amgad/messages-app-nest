import { MessagesRepository } from './messages.repository';

export class MessagesService {
  private messagesRepository: MessagesRepository;
  constructor() {
    this.messagesRepository = new MessagesRepository();
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
