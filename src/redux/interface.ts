import { UserState } from './User/interface';
import { ChatroomsState } from './Chatrooms/interface';

export interface StoreState {
  ChatroomsReducer: ChatroomsState,
  UserReducer: UserState
}
