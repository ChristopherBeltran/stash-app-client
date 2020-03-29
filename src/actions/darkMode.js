export function changeMode(){  
    return {    
       type: "CHANGE_MODE"  
    }
 }

 export function setMode(user){
    let userDarkMode = user.attributes.dark_mode
    return {
       type: "SET_MODE",
       userDarkMode
    }
 }

export function updateUserDarkMode(user, dmBoolean) {
   var userId = user.id;
   var userInfo = {
      user: {
         dark_mode: dmBoolean
      }
   }
   return dispatch => {
      return fetch(`https://the-stash-app.herokuapp.com//api/v1/users/${userId}`, {
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
          dispatch(setMode(response.data));
        }
      })
    }
}