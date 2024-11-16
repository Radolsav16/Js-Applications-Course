import { render, html } from "./node_modules/lit-html/lit-html.js";
import { editBook , deleteBook } from "./buttonFun.js";
export const templateTable = (booksInfo) => html`
<table>

  <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
    </thead>
    <tbody>
    ${booksInfo.map(
      book => html`
        <tr @id=${book._id}>
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>
            <button @click=${editBook}>Edit</button>
            <button @click=${deleteBook}>Delete</button>
          </td>
        </tr>
      `
    )}
  </tbody>
</table> 
`;
