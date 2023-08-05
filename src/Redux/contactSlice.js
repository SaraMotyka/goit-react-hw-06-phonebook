import { createSlice } from '@reduxjs/toolkit';
import { addContact } from "Redux/actions"

const contactsInitialState = []
// const STORAGE_KEY = 'contacts';
// const contactsInitialState = JSON.parse(localStorage.getItem(STORAGE_KEY));

// const setLocalStorage = contacts => {
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
// };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState || [],
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
      // setLocalStorage(state);
    },

    deleteContact(state, action) {
      return state.filter((contact) => contact.id !== action.payload);
        // setLocalStorage(state);
      }
    },
  },
);

export const { deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
