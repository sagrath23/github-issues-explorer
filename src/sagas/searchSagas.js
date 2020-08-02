import {
  call,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';
import { fetchSearchWithSearchTerm } from '../services';
import { actions } from '../domains';
import { searchTermSelector } from '../selectors';


export function* dispatchSearchRequest() {
  yield put(actions.searchRequest()); // check if it's necessary to pass searchTerm here
}

export function* watchLatestSearchTermChange() {
  yield takeLatest(actions.changeSearchTerm, dispatchSearchRequest)
}

export function* watchSearchRequest(){
  yield takeEvery(actions.searchRequest, fetchSearchResults);
} 

export function* fetchSearchResults() {
  const searchTerm = yield select(searchTermSelector);
  const shouldDispatchSearch = searchTerm.length === 0;
  try {
    if (shouldDispatchSearch) {
      const requestResult = yield call(fetchSearchWithSearchTerm, searchTerm);

      console.log(requestResult, 'da request');

      yield put(actions.searchSuccessful(requestResult));
    }
  } catch (error) {
    console.error(error);

    yield put(actions.searchFailure());
  }
}