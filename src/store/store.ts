import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
// ...
import appReducer from "./app/app.slice";
const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
