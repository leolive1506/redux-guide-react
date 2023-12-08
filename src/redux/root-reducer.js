import { combineReducers } from 'redux'
import userReducer from './user/reducer'

// combineReducers pega todos redux e guarda no root
const rootReducer = combineReducers({ userReducer })

export default rootReducer;