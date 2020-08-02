import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';
import { fetchSearchWithSearchTerm } from '../services';
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