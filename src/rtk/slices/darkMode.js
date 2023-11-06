import { createSlice } from '@reduxjs/toolkit'

var initialState = {
  mode: JSON.parse(localStorage.getItem('darkMode')) || false,
}

export const darkMode = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setDark : (state)=> {
      state.mode = !state.mode;
      localStorage.setItem('darkMode',JSON.stringify(state.mode))
      console.log(state);
      return state
    },
   
  },
  
})

export const { setDark } = darkMode.actions

export default darkMode.reducer