import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import { apiSlice } from "./slices/apiSlice.js";
import coursesSlice from "./slices/coursesSlice.js";
import gradesSlice from "./slices/gradesSlice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    courses: coursesSlice,
    grades: gradesSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
