//create a new stream (initialized after a successful sign up)
//update stream (as user selects sources)

//TODO - Add clearStream for when user logs out

import { getSources } from './sources.js'
import { createStash } from './stash.js'

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
      source_ids: stream.source_ids
      }
    }
    return fetch(`http://localhost:3000/api/v1/streams/${stream.id}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(streamToSend)
    })
    .then(r => r.json())
       .then(resp => {
         if (resp.error) {
           alert(resp.error)
         } else {
          //  let streamId = resp.data.id
          //  let sources = resp.included
          //  var newStream = {
          //    id: streamId,
          //    sources: []
          //  }
          //  sources.forEach(function(source){
          //    let sourceAttr = {
          //      id: source.id,
          //      name: source.attributes.name,
          //      api_id: source.attributes.api_id
          //    };
          //    newStream.sources.push(sourceAttr)
          //  })
           //dispatch(updateStreamSuccess(newStream))
           dispatch(getStream(history))
           dispatch(createStash(currentUser))
         }
       })
       .catch(console.log)

  }
}



export const getStream = (history) => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_stream", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        console.log(response)
        dispatch(updateStreamSuccess(response.articles))
        history.push('/stream')
      }
    })
    .catch(console.log)
  }
}

