import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";


const cardTemplate = data => html`
<li class="card">
<img src=${data.imageUrl} alt="travis" />
<p>
  <strong>Brand: </strong><span class="brand">${data.brand}</span>
</p>
<p>
  <strong>Model: </strong
  ><span class="model">${data.model}</span>
</p>
<p><strong>Value:</strong><span class="value">${data.value}</span>$</p>
<a class="details-btn" href=${`/details/${data._id}`}>Details</a>
</li>`


const dashboardTemplate = data => html ` 
<section id="dashboard">
<h2>Collectibles</h2>
${data.length !== 0 ? html `
<ul class="card-wrapper">
 ${data.map(obj => cardTemplate(obj))}
</ul>
`: html `<h2>There are no items added yet.</h2>`}
</section>`;


export async function dashboardPageView(){
    const data = await api.get(itemEndpoins.getAll);
    render(dashboardTemplate(data),main)
}