import { html , render  } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { setItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { getUserId, isOwner } from "../service/userService.js";
import { clickGoing, getGoings, getUserGoings } from "../service/goingService.js";

const detailsTemplate = (data , isOnwer , isLog , goings , isUserGoing) => html`
    <section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${data.imageUrl} alt="example1" />
            <p id="details-title">${data.name}</p>
            <p id="details-category">
              Category: <span id="categories">${data.category}</span>
            </p>
            <p id="details-date">
              Date:<span id="date">${data.date}</span></p>
            <div id="info-wrapper">
              <div id="details-description">
                <span
                  >${data.description}</span>
              </div>

            </div>

            <h3>Going: <span id="go">${goings}</span> times.</h3>

          
            <div id="action-buttons">
              ${isOnwer ? html `<a href="/edit" id="edit-btn">Edit</a>
              <a href="/delete" id="delete-btn">Delete</a>`: html ``}

              ${isLog && !isOnwer && !isUserGoing ? html ` <a href="" @click = ${onClick} id="go-btn">Going</a>`:html ``}
            
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

    const goings = await getGoings();

    const isUserGoing = await getUserGoings();



    render(detailsTemplate(data , owner, isLog , goings , isUserGoing),main);
}



async function onClick(e) {
  e.preventDefault();
  const element = e.target;

  clickGoing(element);
}