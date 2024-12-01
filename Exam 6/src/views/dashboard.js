import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { html , render } from "../lib/litI.js";
import { api } from "../service/requester.js";


const characterTemplate = (data) => html `
    <div class="character">
            <img src=${data.imageUrl} alt="example1" />
            <div class="hero-info">
              <h3 class="category">${data.category}</h3>
              <p class="description">${data.description}</p>
              <a class="details-btn" href=${`details/${data._id}`}>More Info</a>
            </div>
    </div>
`;

const dashboardTemplate = (data) => html `
 <h2>Characters</h2>
 ${data.length !== 0 ? html `
    <section id="characters">
    ${data.map(obj => characterTemplate(obj))}
        </section>` : html `<h2>No added Heroes yet.</h2>`}

         
`;



export async function dashboardPageView(){
    const data = await api.get(itemEndpoins.getAll)
    render(dashboardTemplate(data),main)
}