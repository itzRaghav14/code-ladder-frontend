import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  'name': 'user',
  initialState: {
    'username': 'itzzRaghav'
  },
  reducers: {
    setUsername(state, action) {
      state.username = action.payload.username
    }
  }
})

export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
