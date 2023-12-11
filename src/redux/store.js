// base para todo redux
import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"

import rootReducer from './root-reducer'

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(logger)
})

export default store;