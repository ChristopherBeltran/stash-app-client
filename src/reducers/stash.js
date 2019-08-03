
export default(state = null, action) => {
    switch(action.type){
        case "SET_STASH":
            return action.stash
        default:
            return state
    }
}