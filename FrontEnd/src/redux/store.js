  
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from './reducers'

export const initailizeStore = (state) =>{
    return createStore(reducers,state)
}
