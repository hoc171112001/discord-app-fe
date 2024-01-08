import { configureStore } from '@reduxjs/toolkit';
import lang from './features/lang/lang';
export default configureStore({
  reducer: {
    lang
  }
});
