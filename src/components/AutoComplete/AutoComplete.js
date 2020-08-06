import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { AutoCompleteResult } from '../AutoCompleteResult';
import { actions } from '../../domains';
import { isLoadingSelector, searchTermSelector,searchResultsSelector } from '../../selectors';

export const AutoComplete = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const results = useSelector(searchResultsSelector);
  const searchTerm = useSelector(searchTermSelector);

  const handleInputChange = (event) => {
    const newSearchTerm = event.target.value;

    dispatch(actions.changeSearchTerm({ searchTerm: newSearchTerm }));
  };

  return (
    <>
      <input className="form-control form-control-lg" type="text" placeholder="i.e Jest" value={searchTerm} onChange={handleInputChange} />
      {isLoading ? (
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>) : (
        <div className="list-group">
          {results.length > 0 && (
            <>
              {results.map((result) => (
                <AutoCompleteResult key={uuidv4()} number={result.number} title={result.title} />
              ))}
            </>
          )}
        </div>)}
    </>
  );
};
