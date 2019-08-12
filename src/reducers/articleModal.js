const initialState = false

export default (state=initialState, action) => {
    switch(action.type){
        case "OPEN_ARTICLE_MODAL":
            let newState = true
        return newState

        case "HIDE_ARTICLE_MODAL":
            let newHideState = false
            return newHideState

        default:
        return state
        
        }
    }

