import{ combineReducers} from "redux";
import LoginReducer from './LOGIN/reducer'

export const reducers = combineReducers({
    LoginPSU:LoginReducer
})