import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './slices/darkMode'

export default configureStore({
  reducer: {
    darkMode : darkModeReducer
  },
})


