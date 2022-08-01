import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import modalSlice from './modalSlice';

export const store = configureStore({
  reducer: { modal: modalSlice, auth: authSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<any>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
