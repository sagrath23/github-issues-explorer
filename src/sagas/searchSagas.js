import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';
import { fetchIssue, fetchSearchWithSearchTerm } from '../services';
import { actions } from '../domains';
import { searchTermSelector } from '../selectors';


export function* dispatchSearchRequest() {
  // debounce by 500ms
  yield delay(500);
  yield put(actions.searchRequest());
}

export function* watchLatestSearchTermChange() {
  yield takeLatest(actions.changeSearchTerm, dispatchSearchRequest)
}

export function* watchSearchRequest(){
  yield takeEvery(actions.searchRequest, fetchSearchResults);
}

export function* watchFetchIssueRequest(){
  yield takeEvery(actions.fetchIssueRequest, fetchIssueDetail);
}

export function* fetchSearchResults() {
  const searchTerm = yield select(searchTermSelector);
  const shouldDispatchSearch = searchTerm.length !== 0;

  try {
    if (shouldDispatchSearch) {
      const requestResult = yield call(fetchSearchWithSearchTerm, searchTerm);

      yield put(actions.searchSuccessful({ results: requestResult }));
    }
  } catch (error) {
    console.error(error);

    yield put(actions.searchFailure());
  }
}

export function* fetchIssueDetail({ payload: { issueId }}){
  try {
    const requestResult = yield call(fetchIssue, issueId);

    console.log(requestResult, 'detail');

    yield put(actions.fetchIssueSuccessful(requestResult));
  } catch(error) {
    console.error(error);

    yield put(actions.fetchIssueFailure());
  }
}
