import { getItemId } from "./itemService.js";
import { api } from "./requester.js";
import { getUserId } from "./userService";

const baseUrl = 'http://localhost:3030/data/going';

export async function clickGoing(domElement){
    const eventId = getItemId()
    try{
        await api.post(baseUrl,{ eventId })
        domElement.style.display = 'none';
    }catch(err){
        console.log(err.message);
        
    }
}


export async function getGoings() {
    const eventId = getItemId();

    try{
        const goings = await api.get(baseUrl +`?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`);

        return goings;
    } catch(err){
        console.log(err.message);
        
    }
}


export async function getUserGoings() {
    const eventId = getItemId();
    const userId = getUserId();

    try{
        const goings = await api.get(baseUrl+`?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`)

        if(goings  === 0){
            return false;
        }else{
            return true;
        }
    }catch(err){
        console.log(err.message);
    }

}

