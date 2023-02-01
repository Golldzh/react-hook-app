import {createSlice} from '@reduxjs/toolkit';

export const loadingReducer =  createSlice({
  name: 'loading',
  initialState:{
    isLoading: true
  },
  reducers: {
    setIsLoading(state){
      state.isLoading = false
    }
  }
}) 

export default loadingReducer.reducer;

export const {setIsLoading} = loadingReducer.actions;