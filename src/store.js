import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/users'
import signupForm from './reducers/signupForm'
import thunk from 'redux-thunk'
import loginForm from './reducers/loginForm'
import currentUser from './reducers/currentUser'
import stream from './reducers/stream'
import sources from './reducers/sources'
import stash from './reducers/stash'
import articleModal
 from './reducers/articleModal'

const reducer = combineReducers({
  signupForm,
  loginForm,
  currentUser,
  stream,
  sources,
  stash,
  articleModal
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store