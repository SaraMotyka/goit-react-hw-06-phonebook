import { createSlice, nanoid } from '@reduxjs/toolkit';

const STORAGE_KEY = 'contacts';
const contactsInitialState = JSON.parse(localStorage.getItem(STORAGE_KEY));

const setLocalStorage = contacts => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState || [],
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
      setLocalStorage(state);
    },
    prepare({ id, name, number }) {
      return {
        payload: {
          id,
          name,
          number,
        },
      };
    },

    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        setLocalStorage(state);
      }
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
