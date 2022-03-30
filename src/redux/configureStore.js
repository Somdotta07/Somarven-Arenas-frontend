import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import itemsReducer from './items/items';
import itemsDetailsReducer from './items/ItemDetails';
import reservationsReducer from './reservations/reservation';
import deleteReservedReducer from './reservations/deleteReserved';
import usersReducer from './users/users';

const reducers = combineReducers({
  items: itemsReducer,
  reservations: reservationsReducer,
  itemsDetailsReducer,
  usersReducer,
  deleteReservedReducer,
});
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
