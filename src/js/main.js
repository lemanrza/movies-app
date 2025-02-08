const moviesList = document.querySelector(".movies")
const searchInputValue = document.querySelector(".searchValue")
const sortSelect = document.querySelector("select");
const API_URL = "https://679fb38b24322f8329c46bf0.mockapi.io/api/movies/movie"
let movies = []

function showMovie(movieArray) {
    moviesList.innerHTML = ''
    movieArray.forEach(movie => {
        moviesList.innerHTML += ` <div class="col">
        <div class="card h-100 shadow-sm">
        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
        <div class="card-body text-center">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.genre}</p>
        <span class="badge bg-secondary">${movie.imdbRate}</span>
        </div>
        <div class="card-footer d-flex justify-content-around">
        <button class="fav btn btn-outline-danger" data-id="${movie.id}"><i class="fa-regular fa-heart"></i></button>
        <button class="delete btn btn-outline-dark" data-id="${movie.id}"><i class="fa-solid fa-trash"></i></button>
        <a href="edit.html?id=${movie.id}" class="edit btn btn-outline-primary" data-id="${movie.id}"><i class="fa-regular fa-pen-to-square"></i></a>
        <a href="detail.html?id=${movie.id}" class="detail btn btn-outline-info" data-id="${movie.id}"><i class="fa-solid fa-circle-info"></i></a>
        </div>
        </div>
        </div>`
    });
    const deleteBtns = document.querySelectorAll(".delete")
    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
            if (window.confirm('Are you sure to delete?')) {
                this.parentElement.parentElement.parentElement.remove();
                const id = this.getAttribute("data-id")
                fetch(API_URL + `/${id}`, {
                    method: "DELETE"
                }).then(resp => { console.log(resp) })
            }
        })
    })
    const favBtns = document.querySelectorAll(".fav")
    favBtns.forEach((favBtn) => {
        favBtn.addEventListener("click", function () {
            this.classList.toggle("favorited")
            if (favBtn.classList.contains("favorited")) {
                Swal.fire({
                    title: "Movie added to favorites",
                    icon: "success"
                });
            }
            else {
                Swal.fire({
                    title: "Movie removed from favorites",
                    icon: "error"
                });
            }
        })
    })
}

document.addEventListener("DOMContentLoaded", function () {
    fetch(API_URL, {
        method: "GET"
    }).then((resp) => resp.json())
        .then((data) => {
            movies = data
            localStorage.setItem("movies", JSON.stringify(movies))
            showMovie(movies)

        }).catch(error => console.error("API error:", error))
})

searchInputValue.addEventListener("keyup", function filterByTitle() {
    const searchQuery = searchInputValue.value.toLowerCase().trim();
    const filteredMovies = movies.filter(movie => movie.title.trim().toLowerCase().includes(searchQuery))
    showMovie(filteredMovies)
})

sortSelect.addEventListener("change", function () {
    if (this.value === "new") {
        let sortedMovies = [...movies].sort((a, b) => a.year - b.year);
        showMovie(sortedMovies);
    } else if (this.value === "old") {
        let sortedMovies = [...movies].sort((a, b) => b.year - a.year);
        showMovie(sortedMovies);
    } else {
        showMovie(movies);
    }
});



