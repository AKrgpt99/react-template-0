import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  colorScheme: "light",
};

export const fetchTheme = createAsyncThunk(
  "theme/fetchTheme",
  (_, { rejectWithValue }) => {
    try {
      let colorScheme = localStorage.getItem("colorScheme");
      if (!colorScheme) return initialState.colorScheme;
      return colorScheme;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const setTheme = createAsyncThunk(
  "theme/setTheme",
  (colorScheme, { rejectWithValue }) => {
    try {
      if (colorScheme !== "light" && colorScheme !== "dark")
        throw new Error("invalid colorScheme");
      localStorage.setItem("colorScheme", colorScheme);
      return colorScheme;
    } catch (err) {
      rejectWithValue(err);
    }
  }
);

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTheme.fulfilled, (state, action) => {
      state.colorScheme = action.payload;
    });
    builder.addCase(fetchTheme.fulfilled, (state, action) => {
      state.colorScheme = action.payload;
    });
  },
});

export const {} = themeSlice.actions;

export default themeSlice.reducer;
