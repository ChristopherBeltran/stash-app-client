export const updateForgotPasswordForm = (formData) => {
    return {
      type: "UPDATE_FORGOT_PASSWORD_FORM",
      formData
    }
  }
  
  export const resetLoginForm = () => {
    return {
      type: "RESET_FORGOT_PASSWORD_FORM"
    }
  }