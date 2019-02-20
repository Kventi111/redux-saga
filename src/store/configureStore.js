import { createStore,applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'

import logger from "redux-logger"
import thunk from  'redux-thunk'

import rootSaga from '../sagas'
import rootReducers from '../reducers'

export default () => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducers,applyMiddleware(logger,thunk,sagaMiddleware))
  sagaMiddleware.run(rootSaga)
  
  return store
}