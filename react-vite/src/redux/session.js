import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: 'session',
  initialState: { user: {} },
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload
    },
    removeUser: state => {
      state.user = {}
    },
  }
})

export const thunkSignup = () => async dispatch => {
  const res = await fetch('/api/auth/signup')

}

export const { addUser, removeUser } = sessionSlice.actions
export default sessionSlice.reducer
