import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';

const initialState = {
  contacts: [],
};

const contactReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

export default contactReducer;
