//create a new stream (initialized after a successful sign up)
//update stream (as user selects sources)

//TODO - Add clearStream for when user logs out

import { getSources } from './sources.js'
import { createStash } from './stash.js'
import { getCurrentUser } from './currentUser.js'

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

      return fetch("https://the-stash-app.herokuapp.com//api/v1/streams", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
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

export const updateStreamSuccess = (stream) => {
  return {
    type: "UPDATE_STREAM",
    stream
  }
}

export const updateStream = (stream, history, currentUser) => {
  return dispatch => {
    const streamToSend = {
      stream: {
        user_id: currentUser.id,
      source_ids: stream.source_ids
      }
    }
    return fetch(`https://the-stash-app.herokuapp.com//api/v1/streams/${stream.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
      },
      body: JSON.stringify(streamToSend)
    })
    .then(r => r.json())
       .then(resp => {
         if (resp.error) {
           alert(resp.error)
         } else {
           dispatch(getStream(history, currentUser))
           dispatch(createStash(currentUser))
           dispatch(getCurrentUser())
         }
       })
       .catch(console.log)

  }
}



export const getStream = (history, currentUser) => {
  return dispatch => {
    return fetch(`https://the-stash-app.herokuapp.com//api/v1/get_stream/${currentUser.id}`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        console.log(response.error)
      } else {
        let streamId = response[0];
        dispatch(updateStreamSuccess(response[1].articles));
        dispatch(getStreamSources(streamId));
        history.push('/stream')
      }
    })
    .catch(console.log)
  }
}

export const setStreamSources = (stream) => {
  return {
    type: "SET_STREAM_SOURCES",
    stream
  }
}

export const getStreamSources = (streamId) => {
  return dispatch => {
    return fetch(`https://the-stash-app.herokuapp.com//api/v1/stream_sources/${streamId}`, {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error){
      } else {
        dispatch(setStreamSources(response))
        }
    })
  }
}

//patch "/api/v1/update_single_source/:stream_id/:source_id/:update", to: "api/v1/streams#single_source"

export const updateExistingStream = (stream_id, source_id, update) => {

  return dispatch => {
    return fetch(`https://the-stash-app.herokuapp.com//api/v1/update_single_source/${stream_id}/${source_id}/${update}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error){
      } else {
        dispatch(setStreamSources(response))
        dispatch(getSources())
      }
    })
  }
}


export const addToStreamSources = (source_id) => {
  return {
    type: "ADD_TO_STREAM_SOURCES",
    source_id
  }
}

export const removeFromStreamSources = (source_id) => {
  return {
    type: "REMOVE_FROM_STREAM_SOURCES",
    source_id
  }
}
