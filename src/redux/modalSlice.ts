import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ModalState {
  visible: boolean;
  title: any;
  description: any;
  acceptButton: boolean;
  acceptButtonLabel: any;
}

// Define the initial state using that type
const initialState: ModalState = {
  visible: false,
  title: '',
  description: '',
  acceptButton: true,
  acceptButtonLabel: 'Accept',
};

export const modalSlice: any = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.visible = true;
      state.description = action.payload.description;
      state.title = action.payload.title;
      state.acceptButton = action.payload.acceptButton;
      state.acceptButtonLabel = action.payload.acceptButtonLabel;
    },
    closeModal: (state) => {
      state.visible = false;
      state.description = '';
      state.title = '';
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default modalSlice.reducer;
