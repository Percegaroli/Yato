import { UserActionTypes } from './actionTypes';
import { UserState } from './interface';

export const changeUserState = (payload: UserState) => ({
  type: UserActionTypes.CHANGE_USER_STATE,
  payload,
});

export default {};
