import { NotificationActionTypes } from './actionTypes';
import { GroupInviteNotification } from './interface';

export const loadNotifications = (payload: Array<GroupInviteNotification>) => ({
  type: NotificationActionTypes.LOAD_NOTIFICATIONS,
  payload,
});

export const removeNotification = (payload: id) => ({
  type: NotificationActionTypes.REMOVE_NOTIFICATION,
  payload,
});

export const addNotification = (payload: GroupInviteNotification) => ({
  type: NotificationActionTypes.ADD_NOTIFICATION,
  payload,
});
