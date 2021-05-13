import { all } from 'redux-saga/effects'

import task from './modules/task/sagas'

export default function* rootSaga() {
  return yield all({
    task
  })
}
