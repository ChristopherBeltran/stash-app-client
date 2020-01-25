import { setCurrentUser } from './currentUser.js'
import { createStream } from './stream.js'
import { setFirstTimeUser } from './firstTimeUser.js'
import { addErrors, removeErrors } from './errors.js'

export const updateSignupForm = formData => {
    return {
      type: "UPDATE_SIGNUP_FORM",
      formData
    }
  }
  
  export const resetSignupForm = () => {
    return {
      type: "RESET_SIGNUP_FORM"
    }
  }

  export const signup = (credentials, history) => {
    return dispatch => {
      const userInfo = {
        user: credentials
      }
      return fetch("https://the-stash-app.herokuapp.com/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            dispatch(addErrors(response.error))
            window.location.reload(false)
          } else {
            dispatch(setCurrentUser(response.data))
            let user = response.data.id
            dispatch(createStream(user))
            dispatch(setFirstTimeUser())
            dispatch(resetSignupForm())
            dispatch(removeErrors());
            history.push('/stream/setup')
          }
        })
        .catch(console.log)
    }
  }