import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ChannelSlice {
  personalData: any;
}

// Define the initial state using that type
const initialState: ChannelSlice = {
  personalData: null,
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setPersonal(state, action) {
      state.personalData = action.payload;
    },
  },
});

export const { setPersonal } = channelSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default channelSlice.reducer;
