// formSlice.js
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { baseurl } from '../baseurl';

export interface FormData {
  // Overview data
  companyType: string;
  startMonth: string;
  startYear: string;
  industry: string;
  projectTitle: string;
  mission: string;
  vision: string;

  // Cover page data
  companyName: string;
  companyAddress: string;
  email: string;
  city: string;
  phone: string;
  country: string;
  website: string;
  ceoName: string;

  // Company info data
  legalInformation: string;
  businessType: string;
  problemSolving: string;
  solutionDescription: string;
  isOperating: string;
  revenue: string;
  cashBalance: string;
  netProfit: string;

  // Product/Service data
  products: {
    name: string;
    currency: string;
    costOfGoods: {
      yearOne: string;
      yearTwo: string;
      yearThree: string;
    };
    revenueExpected: {
      yearOne: string;
      yearTwo: string;
      yearThree: string;
    };
  }[];

  // Marketing data
  objective: string;
  strategicSteps: string[];
  competitiveAdvantage: string;

  // Target Customers data
  targetCustomers: {
    education: boolean;
    income: boolean;
    familySize: boolean;
    language: boolean;
    activities: boolean;
    maritalStatus: boolean;
    gender: boolean;
    location: boolean;
    occupation: boolean;
    age: boolean;
    population: boolean;
    other: boolean;
  };

  customerDetails: {
    education: string;
    income: string;
    familySize: string;
    language: string;
    activities: string;
    maritalStatus: string;
    gender: string;
    location: string;
    occupation: string;
    age: string;
    population: string;
    other: string;
  };

  // Contributions & Loans data
  ownerContributions: string;
  ownerWithdrawals: string;
  loanDetails: string;
  interestType: string;
  expectedFundMonth: string;
  expectedFundYear: string;

  // Financial Overview
  companyBalance: string;
  billPaymentDays: string;
  customerCreditDays: string;
  creditCustomerPercentage: string;
  yearlyExpenses: string;
  supplierCreditDays: {
    yearOne: string;
    yearTwo: string;
    yearThree: string;
  };

  // Assets data
  assets: {
    name: string;
    cost: string;
  }[];
}

// Define the initial state
const initialState = {
  loading: false,
  data: null as string | null,
  error: null as string | null,
};

// Create an async thunk for submitting the form data
export const submitFormData = createAsyncThunk<
  string,
  FormData,
  { rejectValue: string }
>('form/submitFormData', async (formData: FormData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${baseurl[2]}/completions2`, {
      formData,
    });
    return response.data; // Adjust based on your backend response
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || 'Failed to submit form'
    );
  }
});

// Create the slice
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitFormData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        submitFormData.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(
        submitFormData.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Unknown error';
        }
      );
  },
});

// Export the async thunk and the reducer
export const { reducer: formReducer } = formSlice;
export const selectFormState = (state: { form: typeof initialState }) =>
  state.form;
