import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactRedu';
import filterReducer from './filtersRedu';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

export default store;
