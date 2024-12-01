import { userEndpoins } from "../endpoints/userEndpoints.js";
import { page } from "../lib/pageI.js";
import { api } from "../service/requester.js";
import { clearUserData } from "../service/userService.js";

export async function logout(){
    try{
        await api.get(userEndpoins.logout);
        clearUserData()
        page.redirect('/');
    }catch(err){
        console.log(err.message);
    }   
}