import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { setItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import { getUserId, isOwner } from "../service/userService.js";

const detailsTemplate = (data , isOwner) => html `
       <section id="details">
          <div id="details-wrapper">
            <p id="details-title">Shoe Details</p>
            <div id="img-wrapper">
              <img src=${data.imageUrl} alt="example1" />
            </div>
            <div id="info-wrapper">
              <p>Brand: <span id="details-brand">${data.brand}</span></p>
              <p>
                Model: <span id="details-model">${data.model}</span>
              </p>
              <p>Release date: <span id="details-release">${data.release}</span></p>
              <p>Designer: <span id="details-designer">${data.designer}</span></p>
              <p>Value: <span id="details-value">${data.value}</span></p>
            </div>

            

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
                ${isOwner ? html `
              <a href="/edit" id="edit-btn">Edit</a>
              <a href="/delete" id="delete-btn">Delete</a>`:html ``}
            </div>
          </div>
        </section>
`;


export async function detailsPageView(ctx){
    const  { id } = ctx.params;
    setItemId(id);
    const data = await api.get(itemEndpoins.id(id));
    const userId = getUserId();
    const owner = isOwner(userId,data._ownerId);

    render(detailsTemplate(data,owner),main);
}