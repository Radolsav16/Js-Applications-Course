import { html , render } from 'lit-html';
import { main } from '../elements/elements.js';
import { api } from '../service/requester.js';
import { itemEndpoins } from '../endpoints/itemEndpoints.js';


const factTemplate = (data) => html `
  <div class="fact">
            <img src=${data.imageUrl} alt="example1" />
            <h3 class="category">${data.category}</h3>
            <p class="description">${data.description}</p>
            <a class="details-btn" href=${`details/${data._id}`}>More Info</a>
          </div>
`;

const dashboardTemplate = (data) => html `
<!-- Dashboard page -->
<h2>Fun Facts</h2>

${data ? html `
 <section id="dashboard">
    ${data.map(obj => factTemplate(obj))}
        
          
        </section>
`: html `<h2>No Fun Facts yet.</h2>`}
 
    
`;



export async function dashboardPageView(){
    const data = await api.get(itemEndpoins.getAll)
    render(dashboardTemplate(data),main)
}