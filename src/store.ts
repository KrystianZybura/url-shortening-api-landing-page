import { configureStore } from "@reduxjs/toolkit";
import linksReducer from "./App/features/linksSlice";
import { linksSaga } from "./App/features/linksSaga";
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
