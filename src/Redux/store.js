import { configureStore } from '@reduxjs/toolkit';
import articleReducer from './articleSlice';
import userDataReducer from './userDataSlice'

const store = configureStore({
  reducer: {
    article: articleReducer,
    userdata : userDataReducer
  },
});

export default store;
