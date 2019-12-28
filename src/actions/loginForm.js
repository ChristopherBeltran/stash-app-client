import { setCurrentUser } from './currentUser.js'
import { getStash } from './stash.js'



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
      var auth_params = {auth:
        credentials
    }
    return dispatch => {
      return fetch("https://the-stash-app.herokuapp.com/api/v1/login", {
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
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            dispatch(getStash())
            history.push('/stream')
          }
        })
        .catch(console.log)
    }
  }