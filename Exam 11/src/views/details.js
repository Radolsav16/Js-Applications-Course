import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { setItemId } from "../service/itemService.js";
import { getLikes, isUserLikes, like } from "../service/likeService.js";
import { api } from "../service/requester.js";
import { getUserId, isOwner } from "../service/userService.js";

const detailPage = (data , isOwner , isLog,likes,isLike,like) => html `
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${data.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${data.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${data.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${data.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${data.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${data.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${likes}</span></div>

          <!--Edit and Delete are only for creator-->
          <div id="action-buttons">
          ${isOwner ? html `
            
            <a href="/edit" id="edit-btn">Edit</a>
            <a href="/delete" id="delete-btn">Delete</a>
          `:html ``}

          ${isLog && !isLike ? html `<a href="" id="like-btn" @click=${like}>Like</a>`:html ``}

          </div>
         
        </div>
    </section>
`;


export async function detailPageView(ctx) {
    const { id } = ctx.params;
    setItemId(id);
    const data = await api.get(itemEndpoins.id(id));

    const userId = getUserId();

    const owner = isOwner(userId,data._ownerId);

    const isLog = Boolean(userId);

    const likes = await getLikes()


    const isLike = await isUserLikes();

  

    const  likeFunc = like;

    render(detailPage(data,owner,isLog,likes,isLike,likeFunc),main)
}
