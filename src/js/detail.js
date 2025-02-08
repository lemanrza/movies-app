const id = new URLSearchParams(window.location.search).get("id")
const API_URL = import.meta.env.VITE_API_URL;
const detailPoster = document.querySelector(".detailPoster");
const detailTitle = document.querySelector(".detailTitle")
const detailGenre = document.querySelector(".genreInfo")
const detailDescription = document.querySelector(".descriptionInfo")
const detailRate = document.querySelector(".rateInfo")
const detailYear = document.querySelector(".yearInfo")
const detailCreatedAt = document.querySelector(".detailCreatedAt")
const detailIframe = document.querySelector(".detailIframe");

document.addEventListener("DOMContentLoaded", function () {
    fetch(API_URL + `/${id}`)
        .then(resp => resp.json())
        .then(((movie) => {
            if (movie) {
                detailPoster.src = movie.poster
                detailTitle.textContent = movie.title
                detailGenre.textContent = movie.genre
                detailDescription.textContent = movie.description
                detailRate.textContent = movie.imdbRate
                detailYear.textContent = movie.year
                detailCreatedAt.textContent=moment(movie.createdAt).format('MMMM Do YYYY, h:mm:ss a');
                detailIframe.src = movie.trailerUrl
            }
        })).catch(error => console.error("API error:", error))
})

