const initialState = {
    password: ""
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_RESET_PASSWORD_FORM":
        return action.formData
      case "CLEAR_RESET_PASSWORD_FORM":
        return initialState
      default:
        return state
    }
  }