const API_URL = import.meta.env.VITE_API_URL;
let movies = []

document.addEventListener("DOMContentLoaded", function () {
    fetch(API_URL, {
        method: "GET"
    }).then((resp) => resp.json())
        .then((data) => {
            movies = data
           
        }).catch(error => console.error("API error:", error))
})

