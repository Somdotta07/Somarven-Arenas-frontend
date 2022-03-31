import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import itemsReducer from './items/items';
import itemsDetailsReducer from './items/ItemDetails';
import reservationsReducer from './reservations/reservation';
import usersReducer from './users/users';
import sessionsReducer from './signin/login';

const reducers = combineReducers({
  items: itemsReducer,
  reservations: reservationsReducer,
  sessions: sessionsReducer,
  itemsDetailsReducer,
  usersReducer,
});
export default createStore(reducers, applyMiddleware(thunk, logger));
