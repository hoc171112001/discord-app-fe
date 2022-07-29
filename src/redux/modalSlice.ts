import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface ModalState {
  visible: boolean;
  title: any;
  description: any;
  onClick: any;
}

// Define the initial state using that type
const initialState: ModalState = {
  visible: false,
  title: '',
  description: '',
  onClick: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.visible = true;
      state.description = action.payload.description;
      state.title = action.payload.title;
    },
    closeModal: (state) => {
      state.visible = false;
      state.description = '';
      state.title = '';
      state.onClick = null;
    },
    registryConfirm: (state, action) => {
      state.onClick = action.payload;
    },
  },
});

export const { openModal, registryConfirm, closeModal } = modalSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default modalSlice.reducer;
