import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { authReducer } from '../auth/reducers/authReducer'

const reducers = combineReducers({
  auth: authReducer,
})
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window !== 'undefined'
      ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
)

export default store
