import { html , render  } from "lit-html";
import { main } from "../elements/elements.js";
import { setItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { getUserId, isOwner } from "../service/userService.js";
import { getLikes, isUserLike, like } from "../service/likeService.js";

const detailsTemplate = (data , isOnwer , isLog , likes , isLike , like) => html`
   <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-category">${data.category}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p id="description">
                ${data.description}
                  </p>
                   <p id ="more-info">
                   ${data.moreInfo}
                    </p>
              </div>

              <h3>Likes:<span id="likes">${likes}</span></h3>
               <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
          ${isOnwer ? html `
            <a href="/edit" id="edit-btn">Edit</a>
            <a href="/delete" id="delete-btn">Delete</a>` : html ``}
          

            ${isLog && !isOnwer && !isLike ? html `<a href="" id="like-btn" @click = ${like}>Like</a>`:html ``}
             <!--Bonus - Only for logged-in users ( not authors )-->
           

          </div>
            </div>
        </div>
      </section>
`;

export async function detailsPageView(ctx,next){
    const  { id } = ctx.params;
    setItemId(id);
    
    const data = await api.get(itemEndpoins.id(id));
    const userId = getUserId();

    const isLog = Boolean(userId);
    const owner = isOwner(userId,data._ownerId);

    const  likes = await getLikes(id);

    const isLike = await isUserLike(id,userId);



    render(detailsTemplate(data , owner, isLog,likes , isLike , like),main);
}