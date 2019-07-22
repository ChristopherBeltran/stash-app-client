const initialState = {
    sources: []
}


export default (state = null, action) => {
    switch (action.type) {
      case "SET_STREAM":
        return action.stream
      default:
        return state
    }
  }



  //TODO - Add clear stream for when user logs out