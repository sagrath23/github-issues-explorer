import { createSelector } from 'reselect';

export const searchTermSelector = (state) => state.search.searchTerm;

export const searchResultsSelector = (state) => state.search.results;

export const selectedIssueSelector = (issueId) => createSelector(
  searchResultsSelector,
  (results) => results.find((result) => result.number === Number.parseInt(issueId))
);
