import { createSlice, nanoid } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

const storageContacts = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: storageContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        const names = state.map(contact => contact.name);
        const newContactName = action.payload.name;
        if (!names.find(name => name === newContactName)) {
          state.push(action.payload);
          Notiflix.Notify.success(
            `Contact with name '${newContactName}' has been added succesfully to contacts list.`
          );
        } else {
          Notiflix.Notify.failure(
            `Contact with name '${newContactName}' is already in contacts.`
          );
        }
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;