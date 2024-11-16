import { deleteBookReq, editBookReq } from "./requests.js";
import { templateTable } from "./rendering.js";
import { showBooks } from "./app.js";

const [addForm, editForm] = document.querySelectorAll("form");

export function editBook(e) {
  

  const button = e.target;

  const td = button.parentElement;
  const tr = td.parentElement;
  const id = tr.id;

  

  const table = button.closest("table");

  const [td1, td2, td3] = tr.querySelectorAll("td");
  const tbody = button.closest("tbody");
  const oldtitle = td1.textContent;
  const oldauthor = td2.textContent;

  addForm.style.display = "none";
  editForm.style.display = "block";

  const [input1, titleInput, authorInput, saveButton] =
    editForm.querySelectorAll("input");

  titleInput.value = oldtitle;
  authorInput.value = oldauthor;

  editForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const currForm = e.target;

  if (titleInput.value === "" || authorInput.value === "") return;
    const newAuthor = authorInput.value;
    const newTitle = titleInput.value;

    editBookReq({title:newTitle,author:newAuthor},id);


    // showBooks()
    
    currForm.reset()
    
    
  });


}

export function deleteBook(e) {
  const button = e.target;

  const td = button.parentElement;
  const tr = td.parentElement;
  const id = tr.id;

  const table = button.closest("table");

  const [td1, td2, td3] = tr.querySelectorAll("td");
  const tbody = button.closest("tbody");
  const title = td1.textContent;
  const author = td2.textContent;

  const book = { title, author };

  deleteBookReq(book);

  tbody.removeChild(tr);
}
