import { combineReducers, createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
import thunk from 'redux-thunk';
import itemsReducer from './items/items';
import itemsDetailsReducer from './items/ItemDetails';
import reservationsReducer from './reservations/reservation';

const reducers = combineReducers({
  items: itemsReducer,
  reservations: reservationsReducer,
  itemsDetailsReducer,
});
export default createStore(reducers, applyMiddleware(thunk, reduxLogger));
