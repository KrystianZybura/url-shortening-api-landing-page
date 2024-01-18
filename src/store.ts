import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "./App/features/linksSlice";

export default configureStore({
  reducer: {
    links: linksReducer,
  },
});
