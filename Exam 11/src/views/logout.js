import { userEndpoins } from "../endpoints/userEndPoints.js";
import { api } from "../service/requester.js";
import page from '../../node_modules/page/page.mjs'
import { clearUserData } from "../service/userService.js";

export async function logout(){
    try{
        await api.get(userEndpoins.logout);
        clearUserData();
        page.redirect('/dashboard')
        
    }catch(err){
        window.alert(err.message);
    }
}