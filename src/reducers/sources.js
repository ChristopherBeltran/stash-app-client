export default (state = null, action) => {
    switch(action.type){
        case "SET_SOURCES":
            return action.parsedSources
        default:
            return state;
    }
}