import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
// ...
import appReducer from "./app/app.slice";
import storyReducer from "./stories/stories.slice";
const store = configureStore({
  reducer: {
    app: appReducer,
    stories: storyReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
