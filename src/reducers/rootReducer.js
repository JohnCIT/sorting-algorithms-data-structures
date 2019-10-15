/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import cardMenuReducer from './cardMenuReducer';
import sortingAlgorReducer from "./sortingAlgorReducer";



export default combineReducers({
 cardMenuReducer,
 sortingAlgorReducer
});