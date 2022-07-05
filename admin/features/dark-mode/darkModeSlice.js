import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  colorScheme: "light",
};

export const fetchColorScheme = createAsyncThunk(
  "darkMode/fetchColorScheme",
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

export const setColorScheme = createAsyncThunk(
  "darkMode/setColorScheme",
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

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setColorScheme.fulfilled, (state, action) => {
      state.colorScheme = action.payload;
    });
    builder.addCase(fetchColorScheme.fulfilled, (state, action) => {
      state.colorScheme = action.payload;
    });
  },
});

export const {} = darkModeSlice.actions;

export default darkModeSlice.reducer;
