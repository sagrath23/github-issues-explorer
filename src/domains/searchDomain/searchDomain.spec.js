import { actions, initialState, reducer } from '../searchDomain';

describe('search domain', () =>{
  describe('actions', () => {
    const results = ['foo'];
    const issueId = 1234;
    const searchTerm = 'some text';

    test.each([
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

  });
});
