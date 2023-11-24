export class MessagesRepository {
  async getAll() {
    const messages = [];
    return messages;
  }

  async getOne(id: number) {
    const messages = {};
    return messages[id];
  }

  async create(content: string) {
    const message = { content: content };
    return message;
  }
}
