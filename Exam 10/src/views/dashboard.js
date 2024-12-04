import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";

const productTemplate = (data) => html`
  <div class="product">
    <img src=${data.imageUrl} alt="example1" />
    <p class="title">${data.title}</p>
    <p><strong>Price:</strong><span class="price">${data.price}</span>$</p>
    <a class="details-btn" href=${`/details/${data._id}`}>Details</a>
  </div>
`;

const dashBoardTemplate = (data) => html`
  <h2>Products</h2>
  ${data.length !== 0
    ? html`
        <section id="dashboard">
          <!-- Display a div with information about every post (if any)-->
          ${data.map((obj) => productTemplate(obj))}
        </section>
      `
    : html` <h2>No products yet.</h2> `}
`;


export async function dashboardPageView(){
    const data = await api.get(itemEndpoins.getAll);
    render(dashBoardTemplate(data),main)
}