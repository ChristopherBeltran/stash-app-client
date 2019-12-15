export default (state = true, action) => {
    switch(action.type){
        case "SET_NON_DESKTOP":
            let newState = false
            return newState
        default:
        return state
    }
}