//const initialState = {
//    id: '',
//    source_ids: []
//}


export default (state = null, action) => {
    switch (action.type) {
      case "SET_STREAM":
        return {
          id: action.stream_id,
          source_ids: []
        }
      case "ADD_SOURCE":
        return {
          ...state,
          source_ids: [...state.source_ids, action.source_id]
        }
      case "REMOVE_SOURCE":
        var newState = state.source_ids.filter(id => id !== action.source_id)
        return {
          ...state,
          source_ids: newState
        }

      default:
        return state
    }
  }



  //TODO - Add clear stream for when user logs out