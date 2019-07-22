//update signup form
//reset signup form
//signup

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
              console.log(response)
            history.push('/')
          }
        })
        .catch(console.log)
    }
  }