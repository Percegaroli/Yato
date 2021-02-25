import { Message } from './interface';

export interface NewMessagePayload {
  chatId: string,
  messages: Array<Message>
}
