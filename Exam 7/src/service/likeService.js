import page from "page";
import { api } from "./requester";
import { getItemId } from "./itemService";

const baseUrl = `http://localhost:3030/data/likes`;

export async function like(){
    try{
         const id = getItemId()   
         await api.post(baseUrl,{ factId:id });
         page.redirect(`/details/${id}`);
    }catch(err){
        console.log(err.message);
    }
}


export async function isUserLike(factId,userId) {
    try{
        const likes = await api.get(baseUrl + `?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`);

        return likes === 0 ? false : true
    }catch(err){
        console.log(err.message);
    }
}


export async function getLikes(factId) {
    try{
        const likes = await api.get(baseUrl + `?where=factId%3D%22${factId}%22&distinct=_ownerId&count`);

        return likes;
    }catch(err){
        console.log(err.message);
        
    }
}


