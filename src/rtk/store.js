import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './slices/darkMode'
import urlSliceReducer from './slices/UrlSlice'
import dateEmployees from './slices/dateEmployees'

export default configureStore({
  reducer: {
    darkMode : darkModeReducer,
    urlValue:urlSliceReducer,
    employeeData:dateEmployees,
  },
})


