import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  currentUser: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log('hello')
      state.currentUser = action.payload
    },

    logout: (state, action) => initialState
  }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer