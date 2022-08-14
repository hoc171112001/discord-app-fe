import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ChannelSlice {
  me: any;
  servers: any;
}

// Define the initial state using that type
const initialState: ChannelSlice = {
  me: {},
  servers: {},
};

export const channelSlice = createSlice({
  name: 'channel',
  initialState,
  reducers: {
    setMeChannel: (state, action) => {
      state.me = action.payload;
    },
    setServersChannel: (state, action) => {
      state.servers = action.payload;
    },
  },
});

export const { setMeChannel, setServersChannel } = channelSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default channelSlice.reducer;
