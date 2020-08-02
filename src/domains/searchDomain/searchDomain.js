import { createActions, handleActions } from 'redux-actions';

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
  searchFailure
} = createActions({
  CHANGE_SEARCH_TERM: ({ searchTerm }) => ({ searchTerm }),
  SEARCH_REQUEST: undefined,
  SEARCH_SUCCESSFUL: ({ results }) => ({ results }), 
  SEARCH_FAILURE: undefined
});

export const reducer = handleActions({
  [changeSearchTerm]: (state, { payload: { searchTerm }}) => ({
    ...state,
    searchTerm
  }),
  [searchRequest]: (state) => ({
    ...state,
    ui: {
      isLoading: true
    }
  }),
  [searchSuccessful]: (state, { payload: { results }}) =>  ({
    ...state,
    results,
    ui: {
      isLoading: false
    }
  }),
  [searchFailure]: (state) => ({
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
  searchFailure
};
