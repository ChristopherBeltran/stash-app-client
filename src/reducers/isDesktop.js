const initialState = true;

export default (state = initialState, action) => {
    switch(action.type){
        case "SET_NON_DESKTOP":
            return false
        default:
        return state
    }
}