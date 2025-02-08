const movieTitleInput = document.querySelector("#title")
const movieGenreInput = document.querySelector("#genre")
const moviePosterInput = document.querySelector("#poster")
const movieYearInput = document.querySelector("#year")
const movieDescriptionInput = document.querySelector("#description")
const movieRateInput = document.querySelector("#rate")
const movieTrailerInput = document.querySelector("#trailer")
const addBtn = document.querySelector("#addition")
const API_URL = import.meta.env.VITE_API_URL;

function showNewMovie(newMv) {
    moviesList.innerHTML += ` <div class="col">
        <div class="card h-100 shadow-sm">
        <img src="${newMv.poster}" class="card-img-top" alt="${newMv.title}">
        <div class="card-body text-center">
        <h5 class="card-title">${newMv.title}</h5>
        <p class="card-text">${newMv.genre}</p>
        <span class="badge bg-secondary">${newMv.imdbRate}</span>
        </div>
        <div class="card-footer d-flex justify-content-around">
        <button class="fav btn btn-outline-danger" data-id="${newMv.id}"><i class="fa-regular fa-heart"></i></button>
        <button class="delete btn btn-outline-dark" data-id="${newMv.id}"><i class="fa-solid fa-trash"></i></button>
        <button class="edit btn btn-outline-primary" data-id="${newMv.id}"><i class="fa-regular fa-pen-to-square"></i></button>
        <button class="detail btn btn-outline-info" data-id="${newMv.id}"><i class="fa-solid fa-circle-info"></i></button>
        </div>
        </div>
        </div>`
}

addBtn.addEventListener("submit", function (e) {
    e.preventDefault()
    const newMovie = {
        title: movieTitleInput.value,
        genre: movieGenreInput.value,
        poster: moviePosterInput.value,
        year: movieYearInput.value,
        description: movieDescriptionInput.value,
        imdbRate: movieRateInput.value,
        trailerUrl: movieTrailerInput.value,
        createdAt: new Date()
    }
    movieTitleInput.value = ''
    movieGenreInput.value = ''
    moviePosterInput.value = ''
    movieYearInput.value = ''
    movieDescriptionInput.value = ''
    movieRateInput.value = ''
    movieTrailerInput.value = ''
    fetch(API_URL, {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newMovie)
    }).then(resp => resp.json())
    then((newMv) => {
        showNewMovie(newMv)
        window.location.reload()
    }).catch(err => {
        console.error("Error adding movie:", err)
    })
})

