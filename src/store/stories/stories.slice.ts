import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import axios from "axios";

type ModalTypes = "add" | "edit" | null;

// Define a type for the slice state

// Define the initial state using that type
const initialState: any = {
  isLoading: false,
  error: null,
  stories: [],
};
export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    uploadFileStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    uploadFileSuccess: (state) => {
      state.isLoading = false;
    },
    uploadFileError: (state) => {
      state.isLoading = false;
    },
    getStoriesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    getStoriesSuccess: (state, action) => {
      state.isLoading = false;
      state.stories = action.payload;
    },
    getStoriesError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  uploadFileStart,
  uploadFileSuccess,
  uploadFileError,
  getStoriesStart,
  getStoriesError,
  getStoriesSuccess,
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;

export const uploadStory =
  () =>
  async (dispatch: any, getState: any): Promise<any> => {
    dispatch(uploadFileStart());
    const fileDetails = getState().app.ui.storyDetailsForm;
    console.log({ fileDetails });
    const result = await axios.post(
      "http://fanduelstories-env.eba-dayypway.us-east-1.elasticbeanstalk.com/stories",
      {
        ...fileDetails,
        tags: fileDetails.tags.join(","),
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log({ result });
  };

export const getStories =
  () =>
  async (dispatch: any, getState: any): Promise<any> => {
    dispatch(uploadFileStart());
    try {
      const result = await axios.get(
        "http://fanduelstories-env.eba-dayypway.us-east-1.elasticbeanstalk.com/stories"
        // {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }
      );
      dispatch(getStoriesSuccess(result.data));
    } catch (e: any) {
      dispatch(getStoriesError(e.message));
      console.log(e);
    }
  };
