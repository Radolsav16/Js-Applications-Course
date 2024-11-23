import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { elemnts } from "../elements.js";
import { ItemsPoints  } from "../service/endpoints.js";
import { setItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import { isLooged, isOwner } from "../service/userService.js";

const detailsTemplate = (data, isLooged, isOwner) => html`
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
                <h3>Like tattoo:<span id="like">0</span></h3>

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
                    !isLooged || !isOwner
                      ? html` <a href="#" id="like-btn">Like</a> `
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

 
  
  render(detailsTemplate(data, loged, owner),elemnts.main);
}
