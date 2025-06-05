// src/features/theme/themeSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { darkTheme, darkThemeB } from './theme';

const initialState = {
  current: darkTheme,
  isB: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isB = !state.isB;
      state.current = state.isB ? darkThemeB : darkTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
