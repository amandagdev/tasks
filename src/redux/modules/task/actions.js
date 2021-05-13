import types from './types'

export function addTask() {
  return {
    type: types.GET_TASKS_SUCCESS_SAGA
  }
}
