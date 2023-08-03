import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/ADD');
export const deleteContact = createAction('contacts/DELETE');
export const setFilter = createAction('filter/SET');
