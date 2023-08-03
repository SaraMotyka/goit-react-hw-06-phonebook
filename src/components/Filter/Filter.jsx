import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../Redux/actions';
import { selectFilter } from '../Redux/selectors';
import css from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className={css.filter}>
      <input
        type="text"
        name="filter"
        className={css.filter__input}
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.toString()))}
        placeholder="Enter name"
      />
    </div>
  );
};

export default Filter;
