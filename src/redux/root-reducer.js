import { combineReducers } from 'redux'
import userReducer from './user/reducer'
import { cartReducer } from './cart/reducer'

// combineReducers pega todos redux e guarda no root
const rootReducer = combineReducers({ userReducer, cartReducer })

export default rootReducer;