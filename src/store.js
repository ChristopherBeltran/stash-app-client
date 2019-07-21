import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
// import usersReducer from './reducers/users'
import signupForm from './reducers/signupForm'
import thunk from 'redux-thunk'

// just displaying different syntax options here (lines 8 and 9)
const reducer = combineReducers({
  signupForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store