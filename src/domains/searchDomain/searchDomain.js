import { combineActions, createActions, handleActions } from 'redux-actions';
import { fetchIssue } from '../../services/searchServices';

export const initialState = {
  searchTerm: '',
  results: [],
  ui: {
    isLoading: false
  }
};

const {
  changeSearchTerm,
  searchRequest,
  searchSuccessful,
  searchFailure,
  fetchIssueRequest,
  fetchIssueSuccessful,
  fetchIssueFailure
} = createActions({
  CHANGE_SEARCH_TERM: ({ searchTerm }) => ({ searchTerm }),
  SEARCH_REQUEST: undefined,
  SEARCH_SUCCESSFUL: ({ results }) => ({ results }), 
  SEARCH_FAILURE: undefined,
  FETCH_ISSUE_REQUEST: ({ issueId }) => ({ issueId }),
  FETCH_ISSUE_SUCCESSFUL: ({ results }) => ({ results }),
  FETCH_ISSUE_FAILURE: undefined
});

export const reducer = handleActions({
  [changeSearchTerm]: (state, { payload: { searchTerm }}) => ({
    ...state,
    searchTerm
  }),
  [combineActions(searchRequest, fetchIssueRequest)]: (state) => ({
    ...state,
    ui: {
      isLoading: true
    }
  }),
  [combineActions(searchSuccessful, fetchIssueSuccessful)]: (state, { payload: { results }}) =>  ({
    ...state,
    results,
    ui: {
      isLoading: false
    }
  }),
  [combineActions(searchFailure, fetchIssueFailure)]: (state) => ({
    ...state,
    ui: {
      isLoading: false
    }
  })
},initialState);

export const actions = {
  changeSearchTerm,
  searchRequest,
  searchSuccessful,
  searchFailure,
  fetchIssueRequest,
  fetchIssueSuccessful,
  fetchIssueFailure
};
