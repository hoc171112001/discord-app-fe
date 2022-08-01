import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface Authentication {
  isAuthenticated: boolean;
}

// Define the initial state using that type
const initialState: Authentication = {
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    changeAuthState: (state: any, action: any) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { changeAuthState } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default authSlice.reducer;
