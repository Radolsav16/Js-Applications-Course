import { api } from "../service/requester.js";
import { UserPoints } from "../service/endpoints.js";
import page from '../../node_modules/page/page.mjs'
import { clearData } from "../service/userService.js";

export  async function logout(){
    try{
        const result = await api.get(UserPoints.logout);
        clearData();
        page.redirect('/')
    }catch(err){
        window.alert('Cant logout user! Try again!');
    }
}

