import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js";
import messageReducer from "./slices/messageSlice.js";

const reducer = {
  auth: authReducer,
  message: messageReducer,
};

const store = configureStore({
  reducer: reducer,
  devTools: true,
});

export default store;
