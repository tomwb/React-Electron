import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { batchDispatchMiddleware } from 'redux-batched-actions'
import rootReducer from './reducers'

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk, batchDispatchMiddleware))
)

export default store
