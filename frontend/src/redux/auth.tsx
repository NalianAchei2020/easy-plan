import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './baseurl';

export interface User {
  name: string;
  email: string;
  password: string;
}

export interface Data {
  loading: boolean;
  users: User[];
  error: string;
  loginError: string;
}

const initialState: Data = {
  loading: false,
  users: [],
  error: '',
  loginError: '',
};

// Register user
export const register = createAsyncThunk<User, User, { rejectValue: string }>(
  'users/register',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseurl[1]}/api/auth/register`,
        userData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.status) {
          case 401:
            return rejectWithValue('You are not authenticated.');
          case 409:
            return rejectWithValue(
              'User is already registered. Please log in.'
            );
          case 500:
            return rejectWithValue('Server error. Please try again later.');
          default:
            return rejectWithValue('An unexpected error occurred.');
        }
      }
      return rejectWithValue('Network error. Please check your connection.');
    }
  }
);

// Login user
export const login = createAsyncThunk<User, User, { rejectValue: string }>(
  'users/login',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${baseurl[1]}/api/auth/login`,
        userData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        switch (error.response.status) {
          case 401:
            return rejectWithValue('You are not authenticated.');
          case 404:
            return rejectWithValue('User not found.');
          case 400:
            return rejectWithValue('Wrong username or password.');
          case 500:
            return rejectWithValue('Server error. Please try again later.');
          default:
            return rejectWithValue('An unexpected error occurred.');
        }
      }
      return rejectWithValue('Network error. Please check your connection.');
    }
  }
);

// Create slice
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload); // Store the newly registered user
        state.error = '';
      })
      .addCase(
        register.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || '';
        }
      )
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.loginError = '';
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload); // Store the logged-in user
        state.loginError = '';
      })
      .addCase(
        login.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.loginError = action.payload || '';
        }
      );
  },
});

// Export the reducer
export const userReducer = userSlice.reducer;
