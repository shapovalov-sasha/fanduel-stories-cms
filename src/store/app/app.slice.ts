import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type ModalTypes = "add" | "edit" | null;

interface FileDetails {
  title: string;
  contentUrl: string;
  contentType: number;
  tags: string[];
  displayBefore: string;
  displayAfter: string;
  file: File | null;
}

const initialFormValues = {
  title: "",
  contentUrl: "",
  contentType: 0,
  tags: [],
  displayBefore: "",
  displayAfter: "",
  file: null,
};

// Define a type for the slice state
interface AppState {
  ui: {
    modal: {
      type: ModalTypes;
      isOpen: boolean;
    };
    storyDetailsForm: {
      data: FileDetails | null;
      isValid: boolean;
    };
  };
}

// Define the initial state using that type
const initialState: AppState = {
  ui: {
    modal: {
      type: null,
      isOpen: false,
    },
    storyDetailsForm: {
      data: initialFormValues,
      isValid: false,
    },
  },
};

export const counterSlice = createSlice({
  name: "counter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<ModalTypes>) => {
      state.ui.modal.type = action.payload;
      state.ui.modal.isOpen = true;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    closeModal: (state) => {
      state.ui.modal.isOpen = false;
      state.ui.modal.type = null;
    },
    setFormDetails: (state, action: PayloadAction<Partial<FileDetails>>) => {
      state.ui.storyDetailsForm.data = {
        ...state.ui.storyDetailsForm.data,
        ...action.payload,
      } as FileDetails;
    },
  },
});

export const { openModal, closeModal, setFormDetails } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
