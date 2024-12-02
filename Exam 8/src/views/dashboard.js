import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/ItemEndpoints.js";
import { api } from "../service/requester.js";


const motorcycleTemplate = (data) => html `
<div class="motorcycle">
<img src=${data.imageUrl} alt="example1" />
<h3 class="model">${data.model}</h3>
<p class="year">${data.year}</p>
<p class="mileage">${data.mileage}</p>
<p class="contact">${data.contact}</p>
<a class="details-btn" href=${`/details/${data._id}`}>More Info</a>
</div>`;

const dashboardTemplate = (data) => html `
 <h2>Available Motorcycles</h2>

 ${data.length !== 0 ? html `
    <section id="dashboard">
          ${data.map(obj => motorcycleTemplate(obj))}
        </section>`:html `<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}

`;


export async function dashboardPageView(){
    const data = await api.get(itemEndpoins.getAll)
    render(dashboardTemplate(data),main)
}

