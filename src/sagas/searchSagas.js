import {
  call,
  put,
  select,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';
import { fetchProductList } from '../services';
import { actions } from '../store/domains';
import { productListSelector } from '../store/selectors';


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
  const productList = yield select(productListSelector);
  const shouldLoadProducts = productList.length === 0;
  try {
    if (shouldLoadProducts) {
      const requestResult = yield call(fetchProductList);

      
    }
  } catch (error) {
    console.error(error);

    yield put(actions.productListFailed());
  }
}