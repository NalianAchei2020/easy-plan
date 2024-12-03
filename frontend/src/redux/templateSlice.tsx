import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from './baseurl';

export interface Template {
  id: string;
  fileName: string;
}

export interface Data {
  loading: boolean;
  error: string | null;
  templates: Template[];
}

const initialState: Data = {
  loading: false,
  error: null,
  templates: [],
};

export const fetchTemplate = createAsyncThunk<
  Template[],
  void,
  { rejectValue: string }
>('template/fetchTemplate', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${baseurl[0]}/api/template`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      switch (error.response.status) {
        case 401:
          return rejectWithValue('You are not authenticated.');
        case 404:
          return rejectWithValue('No template found.');
        case 500:
          return rejectWithValue('Server error. Please try again later.');
        default:
          return rejectWithValue('An unexpected error occurred.');
      }
    }
    return rejectWithValue('Network error. Please check your connection.');
  }
});

const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    // Define your reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTemplate.fulfilled,
        (state, action: PayloadAction<Template[]>) => {
          state.loading = false;
          state.templates = action.payload;
        }
      )
      .addCase(fetchTemplate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const templateReducer = templateSlice.reducer;
