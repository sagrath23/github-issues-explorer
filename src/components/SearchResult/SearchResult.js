import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const SearchResult = ({ number, title }) => (
  <Link className="list-group-item list-group-item-action" to={`/issues/${number}`}>
    <p className="lead m-0">
      {title}
    </p>
  </Link>
);

SearchResult.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string
};

SearchResult.defaultProps = {
  title: ''
};
