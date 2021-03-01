import { NotificationActionTypes } from './actionTypes';
import { NotificationState } from './interface';

interface Action {
  type: NotificationActionTypes,
  payload: any
}

const initialState: NotificationState = {
  groupInvite: [],
};

const NotificationReducer = (state = initialState, action: Action): NotificationState => {
  switch (action.type) {
    case NotificationActionTypes.LOAD_NOTIFICATIONS: {
      return {
        ...state,
        groupInvite: action.payload,
      };
    }
    case NotificationActionTypes.REMOVE_NOTIFICATION: {
      return {
        ...state,
        groupInvite: state.groupInvite.filter((invite) => invite.id !== action.payload),
      };
    }
    case NotificationActionTypes.ADD_NOTIFICATION: {
      const newGroupInvites = [...state.groupInvite];
      newGroupInvites.push(action.payload);
      return {
        ...state,
        groupInvite: newGroupInvites,
      };
    }
    default: return state;
  }
};

export default NotificationReducer;
