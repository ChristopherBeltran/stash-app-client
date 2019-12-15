import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/users'
import signupForm from './reducers/signupForm'
import thunk from 'redux-thunk'
import loginForm from './reducers/loginForm'
import currentUser from './reducers/currentUser'
import stream from './reducers/stream'
import sources from './reducers/sources'
import stash from './reducers/stash'
import firstTimeUser from './reducers/firstTimeUser'
import articleModal from './reducers/articleModal'
import isDesktop from './reducers/isDesktop'

const reducer = combineReducers({
  signupForm,
  loginForm,
  currentUser,
  stream,
  sources,
  stash,
  firstTimeUser,
  articleModal,
  isDesktop
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store