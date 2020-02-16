export const setProfileForm = (state) => {
    return {
        type: "SET_PROFILE_FORM",
        state
    }
}


export const updateProfileForm = formData => {
    return {
      type: "UPDATE_PROFILE_FORM",
      formData
    }
  }
  
  export const resetProfileForm = () => {
    return {
      type: "RESET_PROFILE_FORM"
    }
  }