export default (state = null, action) => {
    switch (action.type) {
      case "SET_STREAM_SOURCES":
        return action.stream.data  
      default:
        return state
    }
  }