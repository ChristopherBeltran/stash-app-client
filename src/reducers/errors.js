export default (state = null, action) => {
    switch(action.type){
        case "ADD_ERRORS":
            return action.parsedErrors
        case "REMOVE_ERRORS":
            return state;
        default:
            return state;
    }
}