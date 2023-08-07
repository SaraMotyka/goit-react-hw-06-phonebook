export const contactsMiddleware = store => next => action => {
  const result = next(action);
  if (action.type?.includes('contacts/')) {
    const contactsState = store.getState().contacts;
    localStorage.setItem('contacts', JSON.stringify(contactsState));
  }
  return result;
};