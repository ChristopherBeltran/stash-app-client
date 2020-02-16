import { resetProfileForm } from './userProfile.js'

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

  export const updateUser = (user, formData) => {
    var userId = user.id;
    var userInfo = ''

    if(formData.name === "") {
        userInfo = {
          user: {
            email: formData.email
          }
        };
    } else if(formData.email === ""){
        userInfo = {
          user: {
            name: formData.name
          }
        };
      } else {
        userInfo = {
          user: {
            name: formData.name,
            email: formData.email
          }
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
          dispatch(getCurrentUser());
          dispatch(resetProfileForm())
          window.location.reload(false);
        }
      })
    }
  }