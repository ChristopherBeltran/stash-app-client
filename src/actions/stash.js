
export const setStash = (stash) => {
    return {
        type: "SET_STASH",
        stash
    }
}

export const createStash = (currentUser) => {
        return dispatch => {
          const stashInfo = {
            stash: {
                user_id: currentUser.id
            }
          }
    
          return fetch("http://localhost:3000/api/v1/stashes", {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(stashInfo)
          })
            .then(r => r.json())
            .then(response => {
              if (response.error) {
                alert(response.error)
              } else {
                dispatch(setStash(response.data))
              }
            })
            .catch(console.log)
        }
      }
