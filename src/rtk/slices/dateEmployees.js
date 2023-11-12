import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getDataApi from '../api/api';


export const getProducts = createAsyncThunk(
  'GetEmployeeDate/getProducts',
  async (_, thunkAPI) => {
    try {
      const data = await getDataApi("/employees");
      console.log(data)
      return data
    } catch (e) {
      console.log(e)
    }

  }
)

var initialState = []

export const GetEmployeeDate = createSlice({
  name: 'employeeDate',
  initialState,
  reducers: {
    getEmployeeDate: (state) => {

      console.log(state);
      return state
    },
    extraReducers: {
      [getProducts.pending]: (state, action) => {
        console.log(action)
      },
      [getProducts.fulfilled]: (state, action) => {
        console.log(action)
      },
      [getProducts.rejected]: (state, action) => {
        console.log(action)
      },
    }
  }
})

export const { getEmployeeDate } = GetEmployeeDate.actions

export default GetEmployeeDate.reducer