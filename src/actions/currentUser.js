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
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
        },
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
          } else {
            dispatch(setCurrentUser(response.data))
          }
        })
        .catch(console.log)
    }
  }

  export const updateUser = (user, name, email) => {

    var userId = user.id;
    var userInfo = {
      user: {
        name: name,
        email: email
      }
    }

    return dispatch => {
      return fetch(`http://localhost:3000/api/v1/users/${userId}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
        },
        body: JSON.stringify(userInfo)
      })
      .then(r => r.json())
      .then(response => {
        if(response.error){

        } else {
          dispatch(getCurrentUser())
        }
      })
    }
  }