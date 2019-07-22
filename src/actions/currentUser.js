export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
  }
  
  export const clearCurrentUser = () => {
    return {
      type: "CLEAR_CURRENT_USER"
    }
  }
  
  export const logout = event => {
    return dispatch => {
      dispatch(clearCurrentUser())
      return fetch('http://localhost:3000/api/v1/logout', {
        credentials: "include",
        method: "DELETE"
      })
    }
  }
  
  export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3000/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(setCurrentUser(response.data))
          }
        })
        .catch(console.log)
    }
  }