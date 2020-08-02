import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../domains';

export const AutoComplete = () => {
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;

    dispatch(actions.changeSearchTerm({ searchTerm }));
  }

  return (
    <input type="text" placeholder="put your issue here" onChange={handleInputChange} />
  );
};
