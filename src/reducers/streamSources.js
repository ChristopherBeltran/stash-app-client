export default (state = null, action) => {
    switch (action.type) {
      case "SET_STREAM_SOURCES":
        return action.stream.data 
      case "ADD_TO_STREAM_SOURCES":
        var newSource = action.source_id
        return {
          ...state, newSource
        }
      case "REMOVE_FROM_STREAM_SOURCES":
        var newState = state.source_ids.filter(id => id !== action.source_id)
        return {
          ...state,
          newState
        }
      default:
        return state
    }
  }