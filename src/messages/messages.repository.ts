import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';

@Injectable()
export class MessagesRepository {
  async getAll() {
    const data = await readFile('db.json', 'utf8');
    const messages = JSON.parse(data);
    return messages;
  }

  async getOne(id: number) {
    const data = await readFile('db.json', 'utf8');
    const messages = JSON.parse(data);
    return messages[String(id)];
  }

  async create(content: string) {
    const message = { content: content };
    const id = Math.floor(Math.random() * 1000);
    const data = await readFile('db.json', 'utf8');
    const messages = JSON.parse(data);
    messages[id] = message;
    await writeFile('db.json', JSON.stringify(messages));
    return message;
  }
}
