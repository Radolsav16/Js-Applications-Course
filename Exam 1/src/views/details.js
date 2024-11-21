import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { ItemsPoints} from "../service/endpoints.js";
import { requesterApi } from "../service/requester.js";

const main = document.getElementById('main-element');

const detailsTemp = (item)=> html `
<section id="details">
          <div id="details-wrapper">
            <div>
              <img id="details-img" src= ${item.imageUrl} alt="example1" />
              <p id="details-title">${item.item}</p>
            </div>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="details-price">${item.price}</p>
                <p class="details-availability">
                  ${item.availability}
                </p>
                <p class="type">${item.type}</p>
                <p id="item-description">
                 ${item.description}
                </p>
              </div>
              <div id="action-buttons">
                <a href="/edit" id="edit-btn">Edit</a>
                <a href="/delete" id="delete-btn">Delete</a>
              </div>
            </div>
          </div>
</section>
`


export async function showDetailsView(ctx){
    const { id } = ctx.params;
    const data = await requesterApi.get(ItemsPoints.idMethod(id));
    
    
    render(detailsTemp(data),main);
    
    
    
}