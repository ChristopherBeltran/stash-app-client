import { getStash } from './stash.js'

export const createArticle = (article) => {
    return dispatch => {
        const formattedArticle = {
            article: {
                title: article.title,
                url: article.url,
                content: article.content,
                description: article.description,
                url_to_image: article.urlToImage,
                published_at: article.publishedAt,
                author: article.author,
                source_api_id: article.source.id
            }
        }

        return fetch(" https://the-stash-app.herokuapp.com/api/v1/articles", {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
            },
            body: JSON.stringify(formattedArticle)
        })
        .then(r => r.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(getStash())
            }
        })
        .catch(console.log)
    }
}

export const openArticleModal = (articleTitle) => {
    return {
        type: "OPEN_ARTICLE_MODAL",
        articleTitle
    }
}

export const hideArticleModal = (articleTitle) => {
    return {
        type: "HIDE_ARTICLE_MODAL",
        articleTitle
    }
}