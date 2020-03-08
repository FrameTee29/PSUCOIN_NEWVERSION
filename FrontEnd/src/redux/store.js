import { createStore } from "redux";
import { combineReducers } from 'redux';
const initialform = [

]

const LoginPsupassport = (state = [], action) => {
    switch (action.type) {
        case "LOGIN_PSU":
            return [...state,action.profile];
        default: return state;
    }
}
const reducers = combineReducers({
    LoginPSU: LoginPsupassport
})

export const initializeStore = (state) => {
    return createStore(reducers, state)
}
