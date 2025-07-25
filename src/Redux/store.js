import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todos_slice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
export default store;
