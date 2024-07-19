document.addEventListener('DOMContentLoaded', () => {
    AOS.init();

    VanillaTilt.init(document.querySelectorAll(".movie-card"), {
        max: 25,
        speed: 400
    });

    const addMovieBtn = document.querySelector('.add-movie-btn');
    const modal = document.querySelector('.modal');
    const closeBtn = document.querySelector('.close-btn');
    const saveMovieBtn = document.querySelector('#save-movie-btn');
    const movieTitleInput = document.querySelector('#movie-title');
    const movieDirectorInput = document.querySelector('#movie-director');
    const movieYearInput = document.querySelector('#movie-year');
    const movieList = document.querySelector('.movie-list');

    addMovieBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    saveMovieBtn.addEventListener('click', () => {
        const movieTitle = movieTitleInput.value.trim();
        const movieDirector = movieDirectorInput.value.trim();
        const movieYear = movieYearInput.value.trim();
        if (movieTitle && movieDirector && movieYear) {
            addMovie(movieTitle, movieDirector, movieYear);
            movieTitleInput.value = '';
            movieDirectorInput.value = '';
            movieYearInput.value = '';
            modal.classList.add('hidden');
        }
    });

    function addMovie(movieTitle, movieDirector, movieYear) {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.dataset.aos = 'zoom-in';
        movieCard.dataset.tilt = '';

        movieCard.innerHTML = `
            <h3>${movieTitle}</h3>
            <p>Directed by ${movieDirector} (${movieYear})</p>
            <div class="movie-progress">
                <input type="checkbox" class="movie-checkbox" id="movie-${movieTitle}">
                <label for="movie-${movieTitle}">Mark as watched</label>
            </div>
        `;

        movieList.appendChild(movieCard);

        VanillaTilt.init(movieCard, {
            max: 25,
            speed: 400
        });
    }
});
