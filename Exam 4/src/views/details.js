import { html , render } from '../../node_modules/lit-html/lit-html.js'
import { main } from '../service/elements.js';
import { ItemsPoints } from '../service/endpoints.js';
import { api } from '../service/requester.js';
import { getUserId, setItemId } from '../service/userService.js';



const detailTemplate = (data, isOwner) => html ` 
<section id="details">
<div id="details-wrapper">
  <img id="details-img" src=${data.imageUrl} alt="example1" />
  <div id="details-text">
    <p id="details-title">${data.title}</p>
    <div id="info-wrapper">
      <div id="description">
        <p id="details-description">
          ${data.details}
        </p>
      </div>
    </div>


    <!--Edit and Delete are only for creator-->
    ${isOwner ? html `<div id="action-buttons">
      <a href="/edit" id="edit-btn">Edit</a>
      <a href="/delete" id="delete-btn">Delete</a>
    </div>`: ""}
   
  </div>
</div>
</section>`;

export async function deteilsPageView(ctx){
   const { id } = ctx.params;
   setItemId(id);
    const data = await api.get(ItemsPoints.idMethod(id));

    const ownerId = data._ownerId;
    const userId = getUserId();

    const isOwner = ownerId === userId;


    render(detailTemplate(data,isOwner),main);
}