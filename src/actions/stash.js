
export const setStash = (stash) => {
    return {
        type: "SET_STASH",
        stash
    }
}

export const createStash = (currentUser) => {
        return dispatch => {
          const stashInfo = {
            stash: {
                user_id: currentUser.id
            }
          }
    
          return fetch("https://the-stash-app.herokuapp.com/api/v1/stashes", {
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
            },
            body: JSON.stringify(stashInfo)
          })
            .then(r => r.json())
            .then(response => {
              if (response.error) {
                alert(response.error)
              } else {
                dispatch(setStash(response.data))
              }
            })
            .catch(console.log)
        }
      }



      export const getStash = () => {
        return dispatch => {
          return fetch("https://the-stash-app.herokuapp.com/api/v1/get_stash", {
            credentials: "include",
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
            }
          })
          .then(r => r.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {
              dispatch(setStash(response.data))
            }
          })
          .catch(console.log)
        }
      }


      export const addToStash= (article, stash) => {
        return dispatch => {
            const formattedArticle = {
                stash: {
                article_attributes: {
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
            }

            const stashId = stash.id
    
            return fetch(`https://the-stash-app.herokuapp.com/api/v1/stashes/${stashId}`, {
                credentials: "include",
                method: "PATCH",
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


    export const removeFromStash = (article, stash) => {
        return dispatch => {
          return fetch(`https://the-stash-app.herokuapp.com/api/v1/stashes/${stash.id}/remove_article/${article.id}`, {
            credentials: "include",
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
            }
            //body: JSON.stringify(formattedArticle)
          })
          .then(r => r.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {
              dispatch(setStash(response.data))
            }
          })
          .catch(console.log)
        }
      }
