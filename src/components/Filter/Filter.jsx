import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/actions';
import css from './Filter.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { selectFilter } from 'Redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterId = nanoid();
  const filter = useSelector(selectFilter);

  const handleInputChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <input
        type="text"
        value={filter}
        className={css.filter__input}
        id={filterId}
        onChange={handleInputChange}
        placeholder="Enter name"
      />
    </div>
  );
};

export default Filter;
