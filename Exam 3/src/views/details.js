import {html , render } from '../../node_modules/lit-html/lit-html.js';
import { elments } from '../service/elements.js';
import { ItemsPoints } from '../service/endpoints.js';
import { getItemId, setItemId } from '../service/itemService.js';
import { api } from '../service/requester.js';
import { getUserId, isLogged, isOwner } from '../service/userService.js';


  

const detailsTemplate = (data , isLogged , isOwner ,itemLikes,userLikes) => html `
    <section id="details">
        ${isLogged && !isOwner && userLikes === 0  ? html `<a href = ${`/details/${data._id}`} id="like-btn" @click =${like}>Like</a>` : ""};

          <div id="details-wrapper">
            <img
              id="details-img"
              src=${data.imageUrl}
              alt="example1"
            />
            <div>
              <p id="details-type">${data.type}</p>
              <div id="info-wrapper">
                <div id="details-description">
                  <p id="description">
                    ${data.description}
                  </p>
                  <p id="more-info">
                   ${data.learnMore}
                  </p>
                </div>
              </div>
              
              <h3>Like Solution:<span id="like">${itemLikes}</span></h3>

              ${isOwner ? html `<div id="action-buttons">
                <a href="/edit" id="edit-btn">Edit</a>
                <a href="/delete" id="delete-btn">Delete</a>`
                :
                ""
                }
                
              </div>
            </div>
          </div>
        </section>
`;


export async function detailsPageView(ctx) {
    
    const id = ctx.params.id;

    const data = await api.get(ItemsPoints.idMethod(id));

    setItemId(data._id);

   
    

   let userId;

    
    

    const log = isLogged();

    if(log){
         userId = getUserId();
    }

    const owner = isOwner(userId,data._ownerId);

    const userLikes= await likesForUser();

    const itemLikes = await getLikes();
    
    render(detailsTemplate(data , log , owner ,itemLikes ,userLikes),elments.main);

    
}


async function like(){
    const likeBtn = document.getElementById('like-btn');
    const url = 'http://localhost:3030/data/likes';

    try{
     await api.post(url,{ solutionId:getItemId() });
    likeBtn.style.display = 'none';
    }catch(err){
        window.alert('Cant like!');
        return;
    }

}


async function getLikes(){
    const id = getItemId();
    const url = `http://localhost:3030/data/likes?where=solutionId%3D%22${id}%22&distinct=_ownerId&count`;

    try{
        const likes = await api.get(url);
        return likes;
    }catch(err){
        window.alert(err.message);
    }



}


async function likesForUser() {
    const userId = getUserId();
    const id = getItemId();
    const url = `http://localhost:3030/data/likes?where=solutionId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`

    try{
        const likes = await api.get(url);
        return likes;
    }catch(err){
        window.alert(err.message);
    }
}