import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import UserReducer from './User';
import ChatroomsReducer from './Chatrooms';
import NotificationsReducer from './Notifications';

const reducers = combineReducers({ UserReducer, ChatroomsReducer, NotificationsReducer });

const store = createStore(
  reducers,
  devToolsEnhancer({}),
);

export default store;
