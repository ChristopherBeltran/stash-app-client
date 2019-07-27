//create a new stream (initialized after a successful sign up)
//update stream (as user selects sources)

//TODO - Add clearStream for when user logs out

import { getSources } from './sources.js'

export const initStream = (stream_id) => {
    return {
        type: "SET_STREAM",
        stream_id
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
            dispatch(initStream(response.data.id))
            dispatch(getSources())
          }
        })
        .catch(console.log)
    }
  }


export const addSource = (source_id) => {
  return {
    type: "ADD_SOURCE",
    source_id
  }
}

export const removeSource = (source_id) => {
  return {
    type: "REMOVE_SOURCE",
    source_id
  }
}


export const updateStream = (stream, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/streams/${stream.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(stream)
    })
    .then(r => r.json())
       .then(resp => {
         if (resp.error) {
           alert(resp.error)
         } else {
           //dispatch(updateTripSuccess(resp.data))
           //history.push(`/trips/${resp.data.id}`)
           // go somewhere else --> trip show?
           // add the new trip to the store
         }
       })
       .catch(console.log)

  }
}







// export const updateTrip = (tripData, history) => {
//   return dispatch => {
//     const sendableTripData = {
//       start_date: tripData.startDate,
//       end_date: tripData.endDate,
//       name: tripData.name
//     }
//     return fetch(`http://localhost:3001/api/v1/trips/${tripData.tripId}`, {
//       credentials: "include",
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(sendableTripData)
//     })
//       .then(r => r.json())
//       .then(resp => {
//         if (resp.error) {
//           alert(resp.error)
//         } else {
//           dispatch(updateTripSuccess(resp.data))
//           history.push(`/trips/${resp.data.id}`)
//           // go somewhere else --> trip show?
//           // add the new trip to the store
//         }
//       })
//       .catch(console.log)

//   }
// }