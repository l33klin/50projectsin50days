const result = document.getElementById("result");
const filter = document.getElementById("filter");

const userList = [];

getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api/?results=50");

  const data = await res.json();
  result.innerHTML = "";
  data.results.forEach((item) => {
    const user = document.createElement("li");
    userList.push(user);
    user.innerHTML = `<li>
    <img src="${item.picture.thumbnail}" alt="Sara">
    <div class="user-info">
      <h4>${item.name.first} ${item.name.last}</h4>
      <p>${item.location.city}, ${item.location.country}</p>
    </div>
  </li>`;
    result.appendChild(user);
  });
}

filter.addEventListener("input", function () {
  userList.forEach(function (user) {
    if (isUserMatch(user, filter.value)) {
      user.classList.remove("hide");
    } else {
      user.classList.add("hide");
    }
  });
});

function isUserMatch(user, keyword) {
  if (user.innerText.toLowerCase().includes(keyword.toLowerCase())) {
    return true;
  }
  return false;
}
