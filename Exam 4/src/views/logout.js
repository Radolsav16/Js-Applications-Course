import { UserPoints } from "../service/endpoints.js";
import { api } from "../service/requester.js";
import { clearData } from "../service/userService.js";
import page from '../../node_modules/page/page.mjs'

export async function logout(){
    try{
    await api.get(UserPoints.logout);
     clearData();
     page.redirect('/');
    }catch(err){
        window.alert('Cant logout!')
    }
} 