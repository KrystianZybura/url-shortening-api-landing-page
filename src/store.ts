import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "./App/features/ShortenLink/linksSlice";
import { linksSaga } from "./App/features/ShortenLink/linksSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    links: linksReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(linksSaga);

export default store;
