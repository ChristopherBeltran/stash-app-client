import { setCurrentUser } from './currentUser.js'



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
      return fetch("http://localhost:3000/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(auth_params)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
            history.push('/')
          }
        })
        .catch(console.log)
    }
  }