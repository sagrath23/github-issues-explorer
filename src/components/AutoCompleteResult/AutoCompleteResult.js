import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


export const AutoCompleteResult = ({ number, title }) => (
  <Link key={uuidv4()} className="list-group-item list-group-item-action" to={`/issues/${number}`}>
    <p class="lead">
      {title}
    </p>
  </Link>
);

AutoCompleteResult.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string
};

AutoCompleteResult.defaultProps = {
  title: ''
};
