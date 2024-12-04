import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { setItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import { getUserId, isOwner } from "../service/userService.js";

const detailsTemplate = (data , isOwner , isLog) => html `
   <section id="details">
          <div id="details-wrapper">
            <img
              id="details-img"
              src=${data.imageUrl}
              alt="example1"
            />
            <p id="details-title">${data.title}</p>
            <p id="details-category">
              Category: <span id="categories">${data.category}</span>
            </p>
            <p id="details-price">
              Price: <span id="price-number">${data.price}</span>$
            </p>
            <div id="info-wrapper">
              <div id="details-description">
                <h4>Bought: <span id="buys">0</span> times.</h4>
                <span
                  >${data.description}</span
                >
              </div>
            </div>

         

            <!--Edit and Delete are only for creator-->
            <div id="action-buttons">
            ${isOwner ? html `<a href="/edit" id="edit-btn">Edit</a>
              <a href="/delete" id="delete-btn">Delete</a>
`:html ``}
            ${isLog ? html `<a href="" id="buy-btn">Buy</a>` :html ``}        
         
            </div>
          </div>
        </section>
`;


export async function detailsPageView(ctx){
    const { id } = ctx.params;

    const data = await api.get(itemEndpoins.id(id));

    setItemId(id);

    const userId = getUserId();
    const isLog = Boolean(userId)

    const owner = isOwner(userId , data._ownerId);



    render(detailsTemplate(data , owner , isLog ),main)
}



