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
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import errors from './reducers/errors'
import forgotPasswordForm from './reducers/forgotPasswordForm'
import resetPasswordForm from './reducers/resetPasswordForm'

const rootReducer = combineReducers({
  signupForm,
  loginForm,
  currentUser,
  stream,
  sources,
  stash,
  firstTimeUser,
  articleModal,
  isDesktop,
  errors,
  forgotPasswordForm,
  resetPasswordForm
})

const persistConfig = {
  key: 'root',
  storage,
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, rootReducer)
//const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default () => {
  let store = createStore(persistedReducer, composeEnhancer(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}