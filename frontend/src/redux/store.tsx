import { configureStore } from '@reduxjs/toolkit';
import { templateReducer } from './templateSlice';
import { userReducer } from './auth';

const store = configureStore({
  reducer: {
    template: templateReducer,
    users: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
