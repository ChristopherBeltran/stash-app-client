const initialState = false

export default (state=initialState, action) {
    switch(action.type){
        case "TOGGLE_ARTICLE_MODAL":
            let newState = !state
        return {
            newState
        }
    }
}