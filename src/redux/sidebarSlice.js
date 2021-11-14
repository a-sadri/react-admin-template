import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarStatus: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    closeSidebar: (state) => {
      state.sidebarStatus = false;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = sidebarSlice.actions;

export default sidebarSlice.reducer;
