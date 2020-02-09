export const updateResetPasswordForm = (formData) => {
    return {
      type: "UPDATE_RESET_PASSWORD_FORM",
      formData
    }
  }
  
  export const clearResetPasswordForm = () => {
    return {
      type: "CLEAR_RESET_PASSWORD_FORM"
    }
  }