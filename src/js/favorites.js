const API_URL = "https://679fb38b24322f8329c46bf0.mockapi.io/api/movies/movie"
let movies = []

document.addEventListener("DOMContentLoaded", function () {
    fetch(API_URL, {
        method: "GET"
    }).then((resp) => resp.json())
        .then((data) => {
            movies = data
           
        }).catch(error => console.error("API error:", error))
})

