import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import UserReducer from './User';
import ChatroomsReducer from './Chatrooms';

const reducers = combineReducers({ UserReducer, ChatroomsReducer });

const store = createStore(
  reducers,
  devToolsEnhancer({}),
);

export default store;
