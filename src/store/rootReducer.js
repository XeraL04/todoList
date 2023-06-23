import { combineReducers } from 'redux';
import { operationsReducer } from '../reducers/reducer';

export const rootReducer = combineReducers({
    operationsReducer,
  });
