import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { ItemsPoints} from "../service/endpoints.js";
import { setItemId } from "../service/itemService.js";
import { requesterApi } from "../service/requester.js";
import { userHelper } from "../service/userService.js";

const main = document.getElementById('main-element');

const detailsTemp = (item,isLooged,isCreator)=> html `
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
              ${isLooged && isCreator ? html `
                <div id="action-buttons">
                <a href="/edit" id="edit-btn">Edit</a>
                <a href="/delete" id="delete-btn">Delete</a>
              </div>`:''}
              
            </div>
          </div>
</section>
`


export async function showDetailsView(ctx){
    const { id } = ctx.params;
    const data = await requesterApi.get(ItemsPoints.idMethod(id));
    setItemId(id);
   
    const userId = userHelper.getUserId();
    const ownerId = data._ownerId;

    

    render(detailsTemp(data,userHelper.isUserIsLogged(),userHelper.isLoogedUserIsOwner(userId,ownerId)),main)

    

    
    
    
    
}