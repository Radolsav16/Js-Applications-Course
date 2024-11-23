import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { api } from "../service/requester.js";
import { ItemsPoints } from "../service/endpoints.js";
import { getItemId } from "../service/itemService.js";
import page  from "../../node_modules/page/page.mjs";



export async function  deleteViewPage () {
    let result = window.confirm('Do you want to delete element for sure ?');

    if(result){
        await api.del(ItemsPoints.idMethod(getItemId()));
        localStorage.removeItem('itemId');
        page.redirect('/dashboard')
    }

    return;
    
  

    
}