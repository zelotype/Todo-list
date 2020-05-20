import { createStore, combineReducers } from 'redux';
import register from './register';

const combinedReducer = combineReducers({
    register,
});

export default createStore(
  combinedReducer,
);
