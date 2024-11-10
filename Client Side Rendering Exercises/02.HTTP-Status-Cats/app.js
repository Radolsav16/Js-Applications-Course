import { cats } from "./catSeeder.js";
import { html,render } from "./node_modules/lit-html/lit-html.js";

const section = document.querySelector("#allCats");
const templete = (cats) => html`
  <ul>
    ${cats.map(
      (cat) => html`
        <li>
          <img
            src="./images/${cat.imageLocation}.jpg"
            width="250"
            height="250"
            alt="Card image cap"
          />
          <div class="info">
            <button class="showBtn" @click = ${cat.showStatusCode}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
              <h4>Status Code: ${cat.statusCode}</h4>
              <p>${cat.statusMessage}</p>
            </div>
          </div>
        </li>
      `
    )}
  </ul>
`;

render(templete(cats),section);





