import { createStore, compose, applyMiddleware } from 'redux'
import combineReducer from './reducer'
import createSaga from 'redux-saga'
import sagas from './sagas'

const sagaMiddleware = createSaga(sagas)

export default createStore(
  combineReducer,
  compose(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(sagas)
