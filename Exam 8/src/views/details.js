import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/ItemEndpoints.js";
import { setItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import { getUserId, isOwner } from "../service/userService.js";

const detailsTemplate = (data , isOwner) => html `
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${data.imageUrl} alt="example1" />
  <p id="details-title">${data.model}</p>
  <div id="info-wrapper">
    <div id="details-description">
      <p class="year">${data.year}/p>
      <p class="mileage">${data.mileage}</p>
      <p class="contact">${data.contact}</p>
         <p id = "motorcycle-description">
        ${data.about}
        </p>
    </div>
     <!--Edit and Delete are only for creator-->
     ${isOwner ? html `
        <div id="action-buttons">
  <a href="/edit" id="edit-btn">Edit</a>
  <a href="/delete" id="delete-btn">Delete</a>
</div>`:html ``}

  </div>
</div>
</section>`


export async function detailsPageView(ctx){
    const { id } = ctx.params;
    setItemId(id);

    const data = await api.get(itemEndpoins.id(id));

    const userId = getUserId();

    const owner = isOwner(userId,data._ownerId);

    render(detailsTemplate(data,owner),main)
}