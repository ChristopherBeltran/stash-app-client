export default (state = false, action) => {
    switch(action.type){
        case "SET_FIRST_TIME_USER":
            let newState = true
            return newState
        case "RESET_FIRST_TIME_USER":
            return state
        default:
        return state
    }
}