import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./slice/counterSlice";
import authReducer from "./slice/authSlice";

// create a store
const Store = configureStore({
  reducer: {
    counter: countReducer,
    auth: authReducer,
  },
});

export default Store;
