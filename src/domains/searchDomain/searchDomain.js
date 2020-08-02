import { createActions, handleActions } from 'redux-actions';

export const inistialState = {
  searchTerm: '',
  ui: {
    isLoading: false
  }
};

const {
  changeSearchTerm,
  searchRequest,
  searchSuccessful,
  searchFailure
} = createActions({
  CHANGE_SEARCH_TERM: ({ searchTerm }) => ({ searchTerm }),
  SEARCH_REQUEST:({  }) => (),
  SEARCH_SUCCESSFUL, 
  SEARCH_FAILURE
});