import page  from "../../node_modules/page/page.mjs";
import { userEndpoins } from "../endpoints/userEndPoints.js";
import { api } from "../service/requester.js";
import { clearUserData } from "../service/userService.js";

export async function logout(){
    try{
        await api.get(userEndpoins.logout);
        clearUserData()
        page.redirect('/')
    }catch(err){
        console.log(err.message);
        
    }
}