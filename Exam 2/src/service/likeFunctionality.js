import { ItemsPoints } from "./endpoints.js";
import { api } from "./requester.js";

 export async function getItemLikes(tattooId){

    try {
    const result = await api.get(ItemsPoints.likeMethodTatto(tattooId))
    return result;
    }catch(err){
        console.log(err.message);
        
    }

    
}


 export async function isUserLiked(tattooId,userId) {
    const result = await api.get(ItemsPoints.getUserLikes(tattooId,userId));

    try {
        const result = await api.get(ItemsPoints.getUserLikes(tattooId,userId));

        if(result === 0){
            return false;
        }else{
            return true;
        }
    }catch(err){
        console.log(err.message);
        
    }
}


 export async function makeLike(tattooId){
    const result = await api.post(ItemsPoints.like,{tattooId});
}
