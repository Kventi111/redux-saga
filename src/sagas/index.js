import {entryLoading,entryLoaded,entryLoadError} from '../actions/dog'
import {takeEvery,put,call} from 'redux-saga/effects'


function* fetchDogAsync() {
  try {
    yield put(entryLoading());

    const data = yield call(() => {
      return fetch('https://dog.ceo/api/breeds/image/random')
              .then(res => res.json())
      }
    );
    
    yield put(entryLoaded(data.message));
  } catch (error) {
    yield put(entryLoadError());
  }
}

export default function* rootSaga() {
  yield takeEvery('FETCHED_DOG', fetchDogAsync);
}
