import { UserState } from './interface';
import { UserActionTypes } from './actionTypes';

const initialState: UserState = {
  email: '',
  id: '',
  lastName: '',
  name: '',
  photo: '',
};

const UserReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UserActionTypes.CHANGE_USER_STATE: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: return state;
  }
};

export default UserReducer;
