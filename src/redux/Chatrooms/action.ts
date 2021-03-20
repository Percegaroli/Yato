import { NewMessagePayload } from './actionParameters';
import { ChatroomsActionTypes } from './actionTypes';
import { ChatroomState } from './interface';

export const loadChatrooms = (payload: Array<ChatroomState>) => ({
  type: ChatroomsActionTypes.LOAD_CHATROOMS,
  payload,
});

export const selectChatroom = (payload: number) => ({
  type: ChatroomsActionTypes.SELECT_CHATROOMS,
  payload,
});

export const addNewMessage = (newMessage: NewMessagePayload) => ({
  type: ChatroomsActionTypes.ADD_NEW_MESSAGE,
  payload: {
    chatroomId: newMessage.chatId,
    messages: newMessage.messages,
  },
});

export const joinChatroom = (payload: ChatroomState) => ({
  type: ChatroomsActionTypes.JOIN_CHATROOM,
  payload,
});

export default {};
