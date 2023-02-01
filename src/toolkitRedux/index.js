import { configureStore} from '@reduxjs/toolkit';
import loadingReducer from './loadingReducer';
import authReduser from './authReduser'

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    auth: authReduser
  }
})