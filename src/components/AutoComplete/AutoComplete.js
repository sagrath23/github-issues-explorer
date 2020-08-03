import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { actions } from '../../domains';
import { searchResultsSelector } from '../../selectors';

export const AutoComplete = () => {
  const dispatch = useDispatch();
  const results = useSelector(searchResultsSelector);
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;

    dispatch(actions.changeSearchTerm({ searchTerm }));
  };

  return (
    <>
      <input type="text" placeholder="put your issue here" onChange={handleInputChange} />
      {results.length > 0 && (
        <div>
          {results.map((result) => (
            <Link key={uuidv4()} to={`/issues/${result.number}`}>
              <h2>{result.title}</h2>
            </Link>))}
        </div>
      )}
    </>
  );
};
