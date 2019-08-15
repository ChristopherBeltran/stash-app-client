import { setCurrentUser } from './currentUser.js'
import { createStream } from './stream.js'
import { setFirstTimeUser } from './firstTimeUser.js'

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
      return fetch("http://localhost:3000/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            let user = response.data.id
            dispatch(createStream(user))
            dispatch(setFirstTimeUser())
            history.push('/stream/setup')
          }
        })
        .catch(console.log)
    }
  }