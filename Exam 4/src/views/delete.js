import { ItemsPoints } from "../service/endpoints.js";
import { api } from "../service/requester.js"
import { getItemId } from "../service/userService.js";
import page from '../../node_modules/page/page.mjs'

export async function deleteView(){
    const result = confirm('Do you want to delete the show?');

    if(result){
        const id = getItemId();
        await api.del(ItemsPoints.idMethod(id));
        page.redirect('/dashboard')
    }

    return;
}