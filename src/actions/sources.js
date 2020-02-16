export const setSources = (sources) => {
    var parsedSources = []
    for(const source of sources){
        parsedSources.push({id: source.id, name: source.attributes.name, description: source.attributes.description})
    }
    return {
        type: "SET_SOURCES",
        parsedSources
    }
}


export const getSources = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/sources", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "https://stashapp.herokuapp.com"
          },
        })
          .then(r => r.json())
          .then(response => {
            if (response.error) {
              alert(response.error)
            } else {

                dispatch(setSources(response.data))
            }
          })
          .catch(console.log)
      }    
}