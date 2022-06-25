import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colorScheme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
