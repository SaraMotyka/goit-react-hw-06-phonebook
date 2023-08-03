import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './actions';

const initialState = '';

const filterReducer = createReducer(initialState, {
  [setFilter]: (state, action) => {
    return {
      state,
      status: action.payload,
    };
  },
});
export default filterReducer;
