import { configureStore, getGetDefaultMiddleware } from '@reduxjs/toolkit'
import task from './reducer'
import logger from './middleware/logger'

const middleware = [...getGetDefaultMiddleware(), logger]

export default configureStore({ reducer: task, middleware })
