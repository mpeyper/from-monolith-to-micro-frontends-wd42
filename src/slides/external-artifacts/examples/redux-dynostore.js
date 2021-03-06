export const parent = `
import { createStore, compose } from 'redux'
import { applyMiddleware } from 'redux-subspace'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-subspace-saga'
import dynostore, { dynamicReducers }  from '@ioof/redux-dynostore'
import { dynamicSagas } from '@ioof/redux-dynostore-saga'
import reducer from './reducer'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, compose(
  applyMiddleware(thunk, sagaMiddleware),
  dynostore(dynamicReducers(), dynamicSagas(sagaMiddleware))
))
`.trim()

export const child = `
import dynamic from '@ioof/react-redux-dynostore'
import subspaced from '@ioof/react-redux-subspace-dynostore'
import { attachReducer } from '@ioof/redux-subspace-dynostore'
import runSaga from '@ioof/redux-subspace-saga-dynostore'
import reducer from './reducers'
import saga from './sagas'
import Example from './Example'

const enhancer = dynamic(
  'example',
  subspaced(),
  attachReducer(reducer),
  runSaga(saga)
)

export default enhancer(Example)
`.trim()
