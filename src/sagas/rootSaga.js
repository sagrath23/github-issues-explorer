import { all } from 'redux-saga/effects';
import {
  watchLatestSearchTermChange,
  watchSearchRequest,
  watchFetchIssueRequest
} from './searchSagas';

// watch latest searchTerm change, and dispatch the request action, with takeAll
export function* rootSaga() {
  yield all([watchLatestSearchTermChange(), watchSearchRequest(), watchFetchIssueRequest()]);
}