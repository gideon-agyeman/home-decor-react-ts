import { UserState, User } from '@/utils';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// import { toast } from 'react-toastify';

const getUserFromLocalStorage = (): User | null => {
  const user = localStorage.getItem('user');
  if (!user) return null;
  return JSON.parse(user);
};

const initialState: UserState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
    login: (state, action: PayloadAction<User>) => {
      const user = action.payload;
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
      // if (user.username === 'demo user') {
      //   toast.success('Welcome Guest user');
      // }
    },
  },
});

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
