import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../service/elements.js";
import { ItemsPoints } from "../service/endpoints.js";
import { api } from "../service/requester.js";

const showTemplate = (data) => html`
  <div class="show">
    <img src=${data.imageUrl} alt="example1" />
    <div class="show-info">
      <h3 class="title">${data.title}</h3>
      <p class="genre">${data.genre}</p>
      <p class="country-of-origin">${data.country}</p>
      <a class="details-btn" href=${`details/${data._id}`}>Details</a>
    </div>
  </div>
`;

const dashboardTemplate = (data) => html`
  <h2>Users Recommendations</h2>
  ${data.length !== 0
    ? html` <section id="shows">
        ${data.map((show) => showTemplate(show))}
      </section>`
    : html`<h2 id="no-show">No shows Added.</h2>`}
`;

export async function dashboardPageView() {
    const data = await api.get(ItemsPoints.getAll);
    
    render(dashboardTemplate(data), main);
 
}
