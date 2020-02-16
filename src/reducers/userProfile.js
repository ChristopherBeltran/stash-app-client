const initialState = {
    name: '',
    email: ''
    }
  
  export default (state=initialState, action) => {
    switch (action.type) {

      case "SET_PROFILE_FORM":
          return {
              name: action.state.currentUser.attributes.name,
              email: action.state.currentUser.attributes.email
          }
      case "UPDATE_PROFILE_FORM":
        return action.formData
      case "RESET_PROFILE_FORM":
        return initialState
      default:
        return state
    }
  }