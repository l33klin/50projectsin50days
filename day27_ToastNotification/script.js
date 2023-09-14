const btn = document.getElementById("btn");
const toasts = document.getElementById("toasts");

const messages = [
  "message one",
  "message two",
  "message three",
  "message four",
];

const types = ["info", "warning", "error", "success"];

btn.addEventListener("click", () => {
  emitNotification(getRandomString(), getRandomType());
});

function emitNotification(content, type) {
  const notif = document.createElement("dev");
  notif.classList.add("toast");
  notif.classList.add(type);
  notif.innerText = content;

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.style.opacity = "0";
  }, 2000);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomString() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}
