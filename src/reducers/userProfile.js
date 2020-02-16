const initialState = {
    name: state.currentUser.attributes.name,
    email: state.currentUser.attributes.email
    }
  
  export default (state=initialState, action) => {
    switch (action.type) {
        
      case "UPDATE_PROFILE_FORM":
        return action.formData
      case "RESET_PROFILE_FORM":
        return initialState
      default:
        return state
    }
  }