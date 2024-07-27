import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: 'session',
  initialState: { user: {} },
  reducers: {
    addUser: state => {
      state.user = { 'name': 'demo' }
    },
    removeUser: state => {
      state.user = {}
    },
    doAction: (state, action) => {
      state.user = action.payload
    },
  }
})

export const thunkAsync = thing => dispatch => {
  console.log('hello from thunk async')
}

export const { addUser, removeUser } = sessionSlice.actions
export default sessionSlice.reducer
