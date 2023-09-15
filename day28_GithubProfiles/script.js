const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const search = document.getElementById("search");
const card = document.querySelector(".card");
const avatar = document.querySelector(".avatar");

async function getUser(username) {
  try {
    const { status, data } = await axios.get(APIURL + username);
    createCard(data);
    getRepos(username);
  } catch (error) {
    main.innerHTML = `<div class="card"><h2>Can't find user...</h2></div>`;
  }
}

async function getRepos(username) {
  try {
    const { status, data } = await axios.get(APIURL + username + "/repos");
    addReposToCard(data);
  } catch (error) {
    console.log(error);
    main.innerHTML = `<div class="card"><h2>Problem fetching repos</h2></div>`;
  }
}

function createCard(userData) {
  const { avatar_url, name, bio, followers, following, public_repos } =
    userData;
  const cardHtml = `<div class="card">
  <div>
    <img src="${avatar_url}" alt="" class="avatar">
  </div>
  <div class="user-info">
    <h2>${name}</h2>
    <p>${bio}</p>

    <ul>
      <li>${followers} <strong>Followers</strong></li>
      <li>${following} <strong>Following</strong></li>
      <li>${public_repos} <strong>Repos</strong></li>
    </ul>

    <div id="repos">
    </div>
  </div>
</div>`;
  main.innerHTML = cardHtml;
}

function addReposToCard(repos) {
  const reposEL = document.getElementById("repos");

  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerHTML = repo.name;

    reposEL.appendChild(repoEl);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = search.value;

  if (username) {
    getUser(username);
    search.value = "";
  }
});
