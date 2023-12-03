import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counter/counter";
export default configureStore({
  reducer: {
    counter,
  },
});
