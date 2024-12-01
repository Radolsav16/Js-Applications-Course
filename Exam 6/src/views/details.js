import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { html , render } from "../lib/litI.js";
import { page } from "../lib/pageI.js";
import { setItemId } from "../service/itemService.js";
import { getHeroLikes, isPersonLike, like } from "../service/likeService.js";
import { api } from "../service/requester.js";
import { getUserId, isOwner } from "../service/userService.js";


const detailsTemplate = (data , isOwner , isUserLike,likes , onLike , isLog) => html `
 <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <div>
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
            </div>
              <h3>Is This Useful:<span id="likes">${likes}</span></h3>
              <div id="action-buttons">

              ${isOwner ? html ` 
            <a href="/edit" id="edit-btn">Edit</a>
            <a href="/delete" id="delete-btn">Delete</a>`: html ``}

            ${!isOwner && !isUserLike   ? html `<a href="" @click = ${onLike} id="like-btn">Like</a>` : ""}

           

          </div>
            </div>
        </div>
</section>
`;


export async function detailsPageView(ctx) {
    const { id } = ctx.params;
    setItemId(id);

    const data = await api.get(itemEndpoins.id(id));

    const isLog = getUserId();

    const owner = isOwner(getUserId(),data._ownerId);

    const isUserLike = await isPersonLike();

    console.log(isUserLike);
    

    const likes = await  getHeroLikes();

    const onLike = like;



    render(detailsTemplate(data , owner , isUserLike , likes , onLike , isLog),main)
}