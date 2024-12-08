import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";


const cardTemplate = data => html`
  <div class="drone">
          <img src=${data.imageUrl} alt="example1" />
          <h3 class="model">${data.model}</h3>
          <div class="drone-info">
            <p class="price">Price: €${data.price}</p>
            <p class="condition">Condition: ${data.condition}</p>
            <p class="weight">Weight: ${data.weight}g</p>
          </div>
          <a class="details-btn" href=${`/details/${data._id}`}>Details</a>
        </div>
`


const dashboardTemplate = data => html ` 
   <h3 class="heading">Marketplace</h3>
   ${data.length !== 0 ? html `
    <section id="dashboard">
       ${data.map(obj => cardTemplate(obj))}
      </section>`:
      html ` <h3 class="no-drones">No Drones Available</h3>`}
      
     
      <!-- Display an h2 if there are no posts -->
     
`;


export async function dashboardPageView(){
    const data = await api.get(itemEndpoins.getAll);
    
    render(dashboardTemplate(data),main)
}