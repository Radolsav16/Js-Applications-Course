import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";

const cardTemplate = data => html `
<li class="card">
            <img src=${data.imageUrl} alt="travis" />
            <p>
              <strong>Singer/Band: </strong><span class="singer">${data.singer}</span>
            </p>
            <p>
              <strong>Album name: </strong><span class="album">${data.album}</span>
            </p>
            <p><strong>Sales:</strong><span class="sales">${data.sales}</span></p>
            <a class="details-btn" href=${`/details/${data._id}`}>Details</a>
</li>
`;

const dashBoardTemplate = data => html `
   <section id="dashboard">
        <h2>Albums</h2>
        ${data.length !== 0 ? html `
            <ul class="card-wrapper">
         ${data.map(obj => cardTemplate(obj))}
        </ul>`:html `<h2>There are no albums added yet.</h2>`}
      

      </section>
`;


export async function dashboardPageView(){
    const data = await api.get(itemEndpoins.getAll);
    render(dashBoardTemplate(data),main)
}