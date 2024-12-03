import { html , render } from '../../node_modules/lit-html/lit-html.js';
import { main } from '../elements/elements.js';
import { api } from '../service/requester.js';
import { itemEndpoins } from '../endpoints/itemEndpoints.js';


const eventTemplate = (data) => html `
  <div class="event">
            <img src=${data.imageUrl} alt="example1" />
            <p class="title">
              ${data.name}
            </p>
            <p class="date">${data.date}</p>
            <a class="details-btn" href=${`/details/${data._id}`}>Details</a>
          </div>
`;

const dashboardTemplate = (data) => html `
<!-- Dashboard page -->
<h2>Fun Facts</h2>

${data.length !== 0 ? html `
 <section id="dashboard">
    ${data.map(obj => eventTemplate(obj))}
        
          
        </section>
`: html`<h2>No Events yet.</h2>`}
 
    
`;



export async function dashboardPageView(){
    const data = await api.get(itemEndpoins.getAll)
    render(dashboardTemplate(data),main)
}