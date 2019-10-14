
import { createStore, applyMiddleware } from 'redux'

export const testMiddleware = store => next => action => {
    console.log(next(action));
    return next(action);
}
