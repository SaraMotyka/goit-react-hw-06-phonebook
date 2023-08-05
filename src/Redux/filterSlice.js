import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from "./const"

const filterInitialState = {
  status: statusFilters
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
