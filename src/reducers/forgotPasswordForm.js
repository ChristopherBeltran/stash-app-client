const initialState = {
    email: ""
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_FORGOT_PASSWORD_FORM":
        return action.formData
      case "RESET_FORGOT_PASSWORD_FORM":
        return initialState
      default:
        return state
    }
  }