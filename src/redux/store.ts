import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import modalSlice from './modalSlice';
import channelSlice from './channelSlice';

export const store = configureStore({
  reducer: { modal: modalSlice, auth: authSlice, channel: channelSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<any>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
