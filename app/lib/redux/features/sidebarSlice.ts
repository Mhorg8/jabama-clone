import { createSlice } from "@reduxjs/toolkit";

interface States {
  sidebarStatus: boolean;
}

const initialState: States = {
  sidebarStatus: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebarStatus = !state.sidebarStatus;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
