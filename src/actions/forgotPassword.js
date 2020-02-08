export const updateForgotPasswordForm = (formData) => {
    return {
      type: "UPDATE_FORGOT_PASSWORD_FORM",
      formData
    }
  }
  
  export const resetForgotPasswordForm = () => {
    return {
      type: "RESET_FORGOT_PASSWORD_FORM"
    }
  }