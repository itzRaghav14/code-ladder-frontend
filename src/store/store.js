import { configureStore } from '@reduxjs/toolkit'
import searchSlice from './searchSlice'
import usernameSlice from './usernameSlice'

const store = configureStore({
  reducer: {
    'search': searchSlice,
    'user': usernameSlice
  },
})

export default store