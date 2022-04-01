import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import itemsReducer from './items/items';
import itemsDetailsReducer from './items/ItemDetails';
import reservationsReducer from './reservations/reservation';
import deleteReservedReducer from './reservations/deleteReserved';
import usersReducer from './users/users';

import addItemReducer from './items/AddItem';

import sessionsReducer from './signin/login';


const reducers = combineReducers({
  items: itemsReducer,
  reservations: reservationsReducer,
  sessions: sessionsReducer,
  itemsDetailsReducer,
  usersReducer,
  deleteReservedReducer,
  addItemReducer,
});
export default createStore(reducers, applyMiddleware(thunk, logger));
