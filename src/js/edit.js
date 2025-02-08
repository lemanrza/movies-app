const id = new URLSearchParams(window.location.search).get("id")
const API_URL = "https://679fb38b24322f8329c46bf0.mockapi.io/api/movies/movie"
const movieTitleInput = document.querySelector("#editTitle")
const movieGenreInput = document.querySelector("#editGenre")
const moviePosterInput = document.querySelector("#editPoster")
const movieYearInput = document.querySelector("#editYear")
const movieDescriptionInput = document.querySelector("#editDescription")
const movieRateInput = document.querySelector("#editRate")
const movieTrailerInput = document.querySelector("#editTrailer")
const saveBtn = document.querySelector(".saveBtn")
const cancelBtn = document.querySelector(".cancelBtn")

cancelBtn.addEventListener("click", function (e) {
    e.preventDefault()
    window.location.href = "home.html"
})

document.addEventListener("DOMContentLoaded", function () {
    fetch(API_URL + `/${id}`)
        .then(resp => resp.json())
        .then((movie) => {
            movieTitleInput.value = movie.title;
            movieGenreInput.value = movie.genre;
            moviePosterInput.value = movie.poster;
            movieYearInput.value = movie.year;
            movieDescriptionInput.value = movie.description;
            movieRateInput.value = movie.imdbRate;
            movieTrailerInput.value = movie.trailerUrl;
        })
})

saveBtn.addEventListener("click", function (e) {
    e.preventDefault()

    const updatedMovie = {
        title: movieTitleInput.value,
        genre: movieGenreInput.value,
        poster: moviePosterInput.value,
        year: movieYearInput.value,
        description: movieDescriptionInput.value,
        imdbRate: movieRateInput.value,
        trailerUrl: movieTrailerInput.value,
    };
    fetch(API_URL + `/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(updatedMovie)
    }).then(resp => resp.json())
        .then((updatedMovie) => {
            window.location.href = "index.html"
        })
})


