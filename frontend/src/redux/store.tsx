// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { templateReducer } from './templateSlice';
import { userReducer } from './auth';
import { formReducer } from './generatingModule/index';

const store = configureStore({
  reducer: {
    template: templateReducer,
    users: userReducer,
    form: formReducer,
  },
});

// Use RootState and AppDispatch to infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
