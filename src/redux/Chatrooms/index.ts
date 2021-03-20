import { ChatroomsState } from './interface';
import { ChatroomsActionTypes } from './actionTypes';

const initialState: ChatroomsState = {
  chatrooms: [],
  selectedChatroomIndex: -1,
};

const ChatroomsReducer = (state = initialState, action: any): ChatroomsState => {
  switch (action.type) {
    case ChatroomsActionTypes.LOAD_CHATROOMS: {
      return {
        ...state,
        chatrooms: action.payload,
      };
    }
    case ChatroomsActionTypes.SELECT_CHATROOMS: {
      return {
        ...state,
        selectedChatroomIndex: action.payload,
      };
    }
    case ChatroomsActionTypes.JOIN_CHATROOM: {
      const chatrooms = [...state.chatrooms];
      chatrooms.push(action.payload);
      return {
        ...state,
        chatrooms,
      };
    }
    case ChatroomsActionTypes.ADD_NEW_MESSAGE: {
      const { chatrooms } = state;
      const index = chatrooms.findIndex((chatroom) => chatroom.id === action.payload.chatId);
      const chatroomMod = { ...chatrooms[index] };
      chatroomMod.messages = action.payload.messages;
      chatrooms[index] = chatroomMod;
      return {
        ...state,
        chatrooms: [
          ...chatrooms,
        ],
      };
    }
    default: return state;
  }
};

export default ChatroomsReducer;
