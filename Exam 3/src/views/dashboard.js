import {html , render} from '../../node_modules/lit-html/lit-html.js';
import { elments } from '../service/elements.js';
import { ItemsPoints } from '../service/endpoints.js';
import { api } from '../service/requester.js';

const solutionTemplate = (obj) => html `
     <div class="solution">
            <img src=${obj.imageUrl} alt="example1" />
            <div class="solution-info">
              <h3 class="type">${obj.type}</h3>
              <p class="description">
               ${obj.description}
              </p>
              <a class="details-btn" href="/details/${obj._id}">Learn More</a>
            </div>
          </div>
`;

const dashboardTemplate = (data) => html`
    <h2>Solutions</h2>
    ${data.length !== 0 ? html `
        <section id="solutions">
            ${data.map(solution => solutionTemplate(solution))}
        </section>
        `:
        html ` <h2 id="no-solution">No Solutions Added.</h2>`}
`;

export async  function dashboardPageView(){
    try{
        const data = await api.get(ItemsPoints.getAll);
        console.log(data);
        
        render(dashboardTemplate(data),elments.main)

    }catch(err){
        console.log(err.message);
    }
}