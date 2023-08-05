import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
import { filterReducer } from './filterSlice';
import { devToolsEnhancer } from "@redux-devtools/extension";


export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
  },
});

export default store;
