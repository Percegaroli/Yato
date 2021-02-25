import { ChatroomsState } from './interface';
import { ChatroomsActionTypes } from './actionTypes';

const initialState: ChatroomsState = {
  chatrooms: [{
    members: [],
    messages: [],
    name: '',
    newMessages: 0,
    id: '',
  }],
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