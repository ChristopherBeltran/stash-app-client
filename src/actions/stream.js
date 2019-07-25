//create a new stream (initialized after a successful sign up)
//update stream (as user selects sources)

//TODO - Add clearStream for when user logs out

import { getSources } from './sources.js'

export const initStream = (stream) => {
    return {
        type: "SET_STREAM",
        stream
      }
}


export const createStream = (user) => {
    return dispatch => {
      const streamInfo = {
        stream: {
            user_id: user
        }
      }

      return fetch("http://localhost:3000/api/v1/streams", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(streamInfo)
      })
        .then(r => r.json())
        .then(response => {
          if (response.error) {
            alert(response.error)
          } else {
            dispatch(initStream(response.data))
            dispatch(getSources())
          }
        })
        .catch(console.log)
    }
  }

