const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTdiMTQzMzlhNzM1M2ZlODA2ZTRjYWMzNGUyOTM4NCIsInN1YiI6IjY0YzM1OWViZDg2MWFmMDBmZmY5NGI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qVULhQkJhYW_BgpfuRcD8qjnTmUQt3a-JYFq_wzkSA";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + AUTH_TOKEN,
  },
};

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMovies(API_URL);

async function getMovies(url) {
  const resp = await fetch(url, OPTIONS);
  const data = await resp.json();
  console.log(data);
  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>`;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote_average) {
  if (vote_average >= 8) {
    return "green";
  } else if (vote_average >= 6) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchKey = search.value;

  if (searchKey && searchKey !== "") {
    getMovies(SEARCH_URL + searchKey);
    search.value = "";
  } else {
    window.location.reload();
  }
});
