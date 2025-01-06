import { applyTheme } from './applyTheme';
import { Theme } from './themeSlice';

export const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem('theme') as Theme) || 'system';
  applyTheme(theme);
  return theme;
};
