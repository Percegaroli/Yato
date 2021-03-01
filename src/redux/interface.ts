import { UserState } from './User/interface';
import { ChatroomsState } from './Chatrooms/interface';
import { NotificationState } from './Notifications/interface';

export interface StoreState {
  ChatroomsReducer: ChatroomsState,
  UserReducer: UserState,
  NotificationsReducer: NotificationState
}
