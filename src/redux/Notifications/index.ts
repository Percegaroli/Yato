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
  switch (action.payload) {
    case NotificationActionTypes.LOAD_NOTIFICATIONS: {
      return {
        groupInvite: action.payload,
      };
    }
    case NotificationActionTypes.REMOVE_NOTIFICATION: {
      return {
        groupInvite: state.groupInvite.filter((invite) => invite.id !== action.payload),
      };
    }
    case NotificationActionTypes.ADD_NOTIFICATION: {
      const newGroupInvites = [...state.groupInvite];
      newGroupInvites.push(action.payload);
      return {
        groupInvite: newGroupInvites,
      };
    }
    default: return state;
  }
};

export default NotificationReducer;
