import { setCurrentUser } from './currentUser.js'
import { getStash } from './stash.js'
import { getStream } from './stream.js'
import { addErrors, removeErrors } from './errors.js'




export const updateLoginForm = (formData) => {
    return {
      type: "UPDATE_LOGIN_FORM",
      formData
    }
  }
  
  export const resetLoginForm = () => {
    return {
      type: "RESET_LOGIN_FORM"
    }
  }

  export const login = (credentials, history) => {
    return dispatch => {
      var auth_params = {auth:
        credentials
    }
      return fetch("http://localhost:3000/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
        },
        body: JSON.stringify(auth_params)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            dispatch(addErrors(response.error))
            window.location.reload(false)
          } else {
            let user = response.data
            dispatch(setCurrentUser(user))
            dispatch(getStream(history, user))
            dispatch(getStash(user))
            dispatch(resetLoginForm())
            dispatch(removeErrors());
            //history.push('/stash')
          }
        })
        .catch(console.log)
    }
  }