import { all, takeLatest } from 'redux-saga/effects'
import types from './types'

function* getTasks() {}

export default all([takeLatest(types.GET_TASKS_SUCCESS_SAGA, getTasks)])
