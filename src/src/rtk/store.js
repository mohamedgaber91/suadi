import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './slices/darkMode'
import urlSliceReducer from './slices/UrlSlice'

export default configureStore({
  reducer: {
    darkMode : darkModeReducer,
    urlValue:urlSliceReducer
  },
})


