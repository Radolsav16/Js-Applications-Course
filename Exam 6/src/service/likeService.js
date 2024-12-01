import { page } from "../lib/pageI.js";
import { getItemId } from "./itemService.js";
import { api } from "./requester.js";
import { getUserId } from "./userService.js";

const baseUrl = 'http://localhost:3030/data/useful';

export async function like(){
    try{
        const id = getItemId()
        await api.post(baseUrl,{ characterId:id });

        page.redirect(`/details/${id}`)
    }catch(err){
        console.log(err);
    }
}


export async function getHeroLikes() {
    try{
        const id = getItemId()
        const likes = await api.get(baseUrl + `?where=characterId%3D%22${id}%22&distinct=_ownerId&count`);
        return  likes;
    }catch(err){
        console.log(err);
    }
}


export async function isPersonLike() {
    try{
        const id = getItemId();
        const userId = getUserId();
        const likes = await api.get(baseUrl + `?where=characterId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`);

        
        if(likes === 0){
            return false;
        }else{
            return true;

        }
    }catch(err){
        console.log(err);
    }
}



