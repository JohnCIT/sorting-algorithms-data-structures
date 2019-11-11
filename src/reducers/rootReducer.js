/*
 src/reducers/rootReducer.js
*/
import { combineReducers } from 'redux';
import cardMenuReducer from './cardMenuReducer';
import sortingAlgorReducer from "./SortingAlgorReducer";



export default combineReducers({
 cardMenuReducer,
 sortingAlgorReducer
});