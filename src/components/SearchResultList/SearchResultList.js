import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { SearchResult } from '../SearchResult';

export const SearchResultList = ({ results }) => (
  <div className="list-group">
    {results.length > 0 && (
      <>
        {results.map((result) => (
          <SearchResult key={uuidv4()} number={result.number} title={result.title} />
        ))}
      </>
    )}
  </div>
);

SearchResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number,
    title: PropTypes.string
  }))
};

SearchResultList.defaultProps = {
  results: []
};
