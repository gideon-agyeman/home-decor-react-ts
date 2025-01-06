import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { initializeTheme } from './initializeTheme';
import { applyTheme } from './applyTheme';

export type Theme = 'dark' | 'light' | 'system';

type State = {
  theme: Theme;
};

const initialState: State = {
  theme: initializeTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<Theme>) => {
      state.theme = payload;
      applyTheme(payload);
      localStorage.setItem('theme', payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
