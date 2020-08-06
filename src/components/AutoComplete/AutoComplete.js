import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AutoCompleteResult } from '../AutoCompleteResult';
import { actions } from '../../domains';
import { isLoadingSelector, searchResultsSelector } from '../../selectors';

export const AutoComplete = () => {
  const dispatch = useDispatch();
  const results = useSelector(searchResultsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const handleInputChange = (event) => {
    const searchTerm = event.target.value;

    dispatch(actions.changeSearchTerm({ searchTerm }));
  };

  return (
    <>
      <input className="form-control form-control-lg" type="text" placeholder="i.e Jest" onChange={handleInputChange} />
      {isLoading ? (
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>) : (
        <div className="list-group">
          {results.length > 0 && (
            <div>
              {results.map((result) => (
                <AutoCompleteResult key={uuidv4()} number={result.number} title={result.title} />
              ))}
            </div>
          )}
        </div>)}
    </>
  );
};
