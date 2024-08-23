import { createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: 'session',
  initialState: { user: {} },
  reducers: {
    addUser(state, action) {
      state.user = action.payload
    },
    removeUser(state) {
      state.user = {}
    },
  }
})

export const thunkSignup = () => async dispatch => {
  const res = await fetch('/api/auth/signup');

  if (res.ok) {
    const user = await res.json();
    dispatch(addUser(user))
  }
}

export const thunkLogin = (data) => async dispatch => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: data
  });

  if (res.ok) {
    const user = await res.json();
    dispatch(addUser(user))
  }
  else {
    const error = await res.json()
    return error
  }
}

export const thunkLogout = () => async dispatch => {
  const res = await fetch('/api/auth/logout');

  if (res.ok) {
    dispatch(removeUser());
  }
}

export const { addUser, removeUser } = sessionSlice.actions
export default sessionSlice.reducer
