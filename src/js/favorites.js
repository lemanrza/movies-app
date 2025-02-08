document.addEventListener("DOMContentLoaded", function () {
    const favoriteList = document.getElementById("favorite-list");
    let favorites = JSON.parse(localStorage.getItem("favorites"));

        favorites.forEach(movie => {
            favoriteList.innerHTML += `
                <div class="col">
                    <div class="card h-100 shadow-sm">
                        <img src="${movie.poster}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.genre}</p>
                            <span class="badge bg-secondary">${movie.imdbRate}</span>
                        </div>
                        <div class="card-footer d-flex justify-content-around">
                            <button class="delete btn btn-outline-dark" data-id="${movie.id}"><i class="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            `;
        });
    

    const deleteBtns = document.querySelectorAll(".delete");
    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
            const movieId = this.getAttribute("data-id");
            let favorites = JSON.parse(localStorage.getItem("favorites"));
            favorites = favorites.filter(movie => movie.id !== movieId);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            this.parentElement.parentElement.parentElement.remove();
        });
    });
});
