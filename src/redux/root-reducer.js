import { combineReducers } from 'redux'
import userReducer from './user/slice'
import cartReducer from './cart/slice'

// combineReducers pega todos redux e guarda no root
const rootReducer = combineReducers({ userReducer, cartReducer })

export default rootReducer;