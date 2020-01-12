export const addErrors = (errors) => {
    var parsedErrors = []
    if(errors.hasOwnProperty('email')){
        parsedErrors.push('Account with this email already exists.  Try another email or proceed to Login.')
    } else if(errors.hasOwnProperty('password')){
        parsedErrors.push('Password must be at least 8 characters. Please try again.')
    } else if(errors.hasOwnProperty('password_confirmation')){
        parsedErrors.push('Passwords do not match.  Please try again.')
    } else {
        parsedErrors.push(errors)
    }
    return {
        type: "ADD_ERRORS",
        parsedErrors
    }
}

export const removeErrors = () => {
    return {
        type: "REMOVE_ERRORS"
    }
}