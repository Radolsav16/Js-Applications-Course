import page from "../../node_modules/page/page.mjs";
import { getItemId } from "./itemService.js"
import { api } from "./requester.js"
import { getUserId } from "./userService.js";

const  baseUrl = 'http://localhost:3030/data/likes'

export async function like(e){
    const element = e.target;
    const id = getItemId();
    try{
        await api.post(baseUrl,{albumId:id});
        page.redirect(`/details/${id}`);
        element.style.display = 'none';
    }catch(err){
        console.log(err.message);
    }
}


export async function getLikes() {
    const id = getItemId();
    
    try{
        const  likes = await api.get(baseUrl + `?where=albumId%3D%22${id}%22&distinct=_ownerId&count`);
        return likes;
    }catch(err){
        console.log(err.message);
    }
}


export async function isUserLikes() {
    const id = getItemId();
    const userId= getUserId()
    try{
        const  likes =  await api.get(baseUrl + `?where=albumId%3D%22${id}%22%20and%20_ownerId%3D%22${userId}%22&count`,{albumId:id});
        if(likes === 0){
            return false;
        }else {
            return true;
        }
    }catch(err){
        console.log(err.message);
    }
}