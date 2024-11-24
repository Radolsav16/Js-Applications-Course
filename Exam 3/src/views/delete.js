import { ItemsPoints } from "../service/endpoints.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";
import page from '../../node_modules/page/page.mjs'

export async function deletePageView(){
    const result = confirm('Do you want to delete solution ?');

    if(result){
        await api.del(ItemsPoints.idMethod(getItemId()));
        page.redirect('/dashboard');
    }

    return;
}