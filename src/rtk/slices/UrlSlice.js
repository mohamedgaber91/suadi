import { createSlice } from '@reduxjs/toolkit'

var initialState = {
  value: "http://127.0.0.1:8090",
}
export const urlSlice = createSlice({
  name: 'urlslice',
  initialState,
  reducers: {
    returnUrl : (state)=> {
        return { value: state.value };
    },
   
  },
  
})

export const { returnUrl } = urlSlice.actions

export default urlSlice.reducer