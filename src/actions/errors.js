export const addErrors = (errors) => {
    return {
        type: "ADD_ERRORS",
        errors
    }
}

export const removeErrors = () => {
    return {
        type: "REMOVE_ERRORS"
    }
}