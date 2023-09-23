// const homeBtn = document.getElementById("home");
// const workBtn = document.getElementById("work");
// const blogBtn = document.getElementById("blog");
// const aboutBtn = document.getElementById("about");
const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

listItems.forEach(function (item, index) {
  item.addEventListener("click", function (e) {
    activeItem(index);
    showContent(index);
  });
});

function activeItem(index) {
  listItems.forEach(function (item, i) {
    if (index === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function showContent(index) {
  contents.forEach(function (content, i) {
    if (index === i) {
      content.classList.add("show");
    } else {
      content.classList.remove("show");
    }
  });
}
