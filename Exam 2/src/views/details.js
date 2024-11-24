import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { elemnts } from "../elements.js";
import { ItemsPoints  } from "../service/endpoints.js";
import { getItemId, setItemId } from "../service/itemService.js";
import { getItemLikes , isUserLiked , makeLike } from "../service/likeFunctionality.js";
import { api } from "../service/requester.js";
import { getUserData, isLooged, isOwner } from "../service/userService.js";


const  detailsTemplate = (data, isLooged, isOwner , likes , isLiked) => html`
    <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src=${data.imageUrl}
              alt="example1"
            />
            <div>
              <div id="info-wrapper">
                <p id="details-type">${data.type}</p>
                <div id="details-description">
                  <p id="user-type">${data.userType}</p>
                  <p id="description">
                   ${data.description}
                  </p>
                </div>
                <h3>Like tattoo:<span id="like">${likes}</span></h3>

                ${
                  isLooged && isOwner
                    ? html`
                        <div id="action-buttons">
                          <a href="/edit" id="edit-btn">Edit</a>
                          <a href="/delete" id="delete-btn">Delete</a>
                        </div>
                      `
                    : ""
                }

                  ${
                    isLooged && !isOwner && !isLiked
                      ? html` <a href="" id="like-btn" @click=${like}>Like</a> `
                      : ""
                  }
                </div>
              </div>
            </div>
          </div>
        </section>
`;

export async function detailsPageView(ctx) {
  const id = ctx.params.id;
  setItemId(id);
  const data = await api.get(ItemsPoints.idMethod(id));

 
  const loged = isLooged();
  const owner = isOwner(data._ownerId);


 const itemLikes = await getItemLikes(id);

  const isLiked  = await isUserLiked(id,getUserData().userId);

  
  
  
  render(detailsTemplate(data, loged, owner , itemLikes , isLiked),elemnts.main);
}




async function like(){
    const likeBtn = document.getElementById('like-btn');
    likeBtn.style.display = 'none';
    const id = getItemId();
    const result = await makeLike(id);

}