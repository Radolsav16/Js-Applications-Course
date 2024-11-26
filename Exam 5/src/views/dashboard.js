import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";


const carTemplate = (obj) => html `
<div class="car">
            <img src=${obj.imageUrl} alt="example1" />
            <h3 class="model">${obj.model}</h3>
            <div class="specs">
              <p class="price">${obj.price}</p>
              <p class="weight">${obj.weight}</p>
              <p class="top-speed">${obj.speed}</p>
            </div>
            <a class="details-btn" href=${`details/${obj._id}`}>More Info</a>
</div>
`

const dashBoardTemplate = (data) => html `
     <h3 class="heading">Our Cars</h3>
     ${data.length !== 0 ? html `
        <section id="dashboard">
          ${data.map(car => carTemplate(car))}
        </section>`:html `<h3 class="nothing">Nothing to see yet</h3>`}
      
     
`;


export async function dashBoardPageView(){
    const data = await api.get(itemEndpoins.getAll);
    render(dashBoardTemplate(data),main)
}