import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/cartSlice';
import userReducer from './features/user/userSlice';
import themeReducer from './features/theme/themeSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ReduxStore = {
  getState: () => RootState;
  dispatch: AppDispatch;
};
