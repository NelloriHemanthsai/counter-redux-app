// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isLoggedIn: true,
//   },
//   reducer: {
//     // actions
//     TOGGLE_AUTH: (state) => {
//       state.isLoggedIn = !state.isLoggedIn;
//     },
//   },
// });

// export const { TOGGLE_AUTH } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    TOGGLE_AUTH: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { TOGGLE_AUTH } = authSlice.actions;
export default authSlice.reducer;
