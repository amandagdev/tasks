import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'task',
  initialState: {
    add: 0
  },
  reducers: {
    add: (state) => {}
  }
})

export const { add } = slice.actions
export default slice.reducer
