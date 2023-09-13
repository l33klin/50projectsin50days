const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

function getData(data) {
  header.innerHTML = `<img
  src="https://images.unsplash.com/photo-1694202377773-43b12558693c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2865&q=80"
  alt="">`;
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, non.";
  profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/11.jpg" alt="">`;
  name.innerHTML = "Job Steven";
  data.innerHTML = "Sep 12, 2023";
  animated_bgs.forEach(function (animated_bg) {
    animated_bg.classList.remove("animated-bg");
  });
  animated_bg_texts.forEach(function (animated_bg) {
    animated_bg.classList.remove("animated-bg-text");
  });
}

setTimeout(function () {
  getData("");
}, 3000);
