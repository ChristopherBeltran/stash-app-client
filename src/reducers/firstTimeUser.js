export default (state = false, action) => {
    switch(action.type){
        case "SET_FIRST_TIME_USER":
            let newState = true
            return newState
        case "RESET_FIRST_TIME_USER":
            let resetState = false
            return resetState
        default:
        return state
    }
}