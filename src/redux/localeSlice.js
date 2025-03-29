import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const themes = ['green', 'blue', 'orange', 'gray'];

const slice = createSlice({
  name: 'locale',
  initialState: {
    theme: 'green',
  },
  reducers: {
    changeTheme(state) {
      const currentIdx = themes.indexOf(state.theme);
      const nextIdx = (currentIdx + 1) % themes.length;
      state.theme = themes[nextIdx];
    },
  },
});

export const { changeTheme } = slice.actions;

const persistConfig = {
  key: 'locale',
  storage,
};

export default persistReducer(persistConfig, slice.reducer);

// Selectors

export const selectTheme = state => state.locale.theme;
