import { html , render  } from "../../node_modules/lit-html/lit-html.js";
import { elemnts } from "../elements.js";
import { ItemsPoints } from "../service/endpoints.js";
import { api } from "../service/requester.js";


const tatooTemp = (obj) => html `
  <div class="tattoo">
            <img src=${obj.imageUrl} alt="example1" />
            <div class="tattoo-info">
              <h3 class="type">${obj.type}</h3>
              <span>Uploaded by </span>
              <p class="user-type">${obj.userType}</p>
              <a class="details-btn" href="/details/${obj._id}">Learn More</a>
            </div>
 </div>
`

const dashboardTemplate = (data) => html `
<h2>Collection</h2>
${data.length !== 0 ? 
html ` 
        <section id="tattoos">
         ${data.map(obj => tatooTemp(obj))}
        </section>`
         : html ` <h2 id="no-tattoo">Collection is empty, be the first to contribute</h2>`}
   

              
`;

export  async function dashboardPageView(){
    const data = await api.get(ItemsPoints.getAll);
    render(dashboardTemplate(data),elemnts.main);
}
