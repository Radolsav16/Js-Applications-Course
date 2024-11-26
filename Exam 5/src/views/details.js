import { html , render } from "../../node_modules/lit-html/lit-html.js";
import page  from "../../node_modules/page/page.mjs";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";
import { getUserId, setItemID } from "../service/userService.js";

const detailsTemplate = (data , isOwner) => html `
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.model}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p class="price">${data.price}</p>
                <p class="weight">${data.weight}</p>
                <p class="top-speed">${data.speed}</p>
                <p id="car-description">
                    ${data.about}
               </p>
              </div>
              <!--Edit and Delete are only for creator-->
              ${isOwner ?
                 html `   <div id="action-buttons">
                <a href="/edit" id="edit-btn">Edit</a>
                <a href="/delete" id="delete-btn">Delete</a>
              </div>`:""}
           
            </div>
          </div>
    </section>
`;


export async function detailsPageView(ctx){
    const { id } = ctx.params;
    setItemID(id);
    const data = await api.get(itemEndpoins.id(id));
    const userId = getUserId();
    const onwerId = data._ownerId;

    const isOwner = userId === onwerId;

    console.log(data);
    
    render(detailsTemplate(data , isOwner),main)
}