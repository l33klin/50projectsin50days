const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=1";
const AUTH_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTdiMTQzMzlhNzM1M2ZlODA2ZTRjYWMzNGUyOTM4NCIsInN1YiI6IjY0YzM1OWViZDg2MWFmMDBmZmY5NGI4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qVULhQkJhYW_BgpfuRcD8qjnTmUQt3a-JYFq_wzkSA";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";
const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + AUTH_TOKEN,
  },
};

const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
  const resp = await fetch(url, OPTIONS);
  const data = await resp.json();
  console.log(data);
}

getMovies(API_URL);

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
