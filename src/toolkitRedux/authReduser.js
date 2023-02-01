import {createSlice} from '@reduxjs/toolkit';

export const authReduser =  createSlice({
  name: 'auth',
  initialState:{
    isAuth: false
  },
  reducers:{
    setIsAuth(state){
      state.isAuth = !state.isAuth
    }
  }
}) 

export default authReduser.reducer;

export const {setIsAuth} = authReduser.actions;

