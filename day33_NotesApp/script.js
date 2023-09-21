const addBtn = document.getElementById("add");

addBtn.addEventListener("click", function (e) {
  addNewNote("hello");
});

function addNewNote(text = "") {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");

  noteEl.innerHTML = `
  <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${text ? "" : "hidden"}"></div>
  <textarea class="${text ? "hidden" : ""}"></textarea>`;

  const editBtn = noteEl.querySelector(".edit");
  const deleteBtn = noteEl.querySelector(".delete");
  const main = noteEl.querySelector(".main");
  const textArea = noteEl.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    noteEl.remove();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
  });

  document.body.appendChild(noteEl);
}
