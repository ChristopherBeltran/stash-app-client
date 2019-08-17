const initialState = {
    display: false,
    articleTitle: null
}

export default (state=initialState, action) => {
    switch(action.type){
        case "OPEN_ARTICLE_MODAL":
            return {
                display: true,
                articleTitle: action.articleTitle
            }

        case "HIDE_ARTICLE_MODAL":
            return {
                display: false,
                articleTitle: null
            }

        default:
        return state
        
        }
    }

