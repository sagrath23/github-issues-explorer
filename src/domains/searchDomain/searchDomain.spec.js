import { actions, initialState, reducer } from '../searchDomain';

describe('search domain', () =>{
  const results = ['foo'];
  const issueId = 1234;
  const searchTerm = 'some text';

  describe('actions', () => {
    test.each([
      // action creator, action creator params, expected action object
      [actions.searchRequest, null,{ type: 'SEARCH_REQUEST' }],
      [actions.searchSuccessful, { results }, { type: 'SEARCH_SUCCESSFUL', payload: { results } }],
      [actions.searchFailure, null, { type: 'SEARCH_FAILURE' }],
      [actions.fetchIssueRequest, { issueId }, { type: 'FETCH_ISSUE_REQUEST', payload: { issueId } }],
      [actions.fetchIssueSuccessful, { results }, { type: 'FETCH_ISSUE_SUCCESSFUL', payload: { results } }],
      [actions.fetchIssueFailure, null, { type: 'FETCH_ISSUE_FAILURE' }],
      [actions.changeSearchTerm, { searchTerm }, { type: 'CHANGE_SEARCH_TERM', payload: { searchTerm } }]
    ])('%s should return the proper object action', (actionCreator, params, expectedAction) => expect(params ? actionCreator(params) : actionCreator()).toEqual(expectedAction));
  });

  describe('reducer', () => {
    test.each([
      // action creator, initial state, expected state
      [actions.searchRequest(),initialState, { ...initialState, ui: { isLoading: true } }],
      [actions.searchSuccessful({ results }), initialState, { ...initialState, results, ui: { isLoading: false }}],
      [actions.searchFailure(), initialState, { ...initialState, ui: { isLoading: false } }],
      [actions.fetchIssueRequest({ issueId }), initialState, { ...initialState, ui: { isLoading: true }}],
      [actions.fetchIssueSuccessful({ results }), initialState, { ...initialState, results, ui: { isLoading: false }}],
      [actions.fetchIssueFailure(), initialState, { ...initialState, ui: { isLoading: false } }],
      [actions.changeSearchTerm({ searchTerm }), initialState, { ...initialState, searchTerm }]
    ])('should return the proper state for %s action', (action, initialState, expectedState) => expect(reducer(initialState, action)).toEqual(expectedState));
  });
});
