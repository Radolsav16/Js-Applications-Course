import page from "../../node_modules/page/page.mjs";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";

export async function deletePageView(){
    const result = confirm('Do you want to delete product ?');

    if(result){
        const id = getItemId()
        await api.del(itemEndpoins.id(id));
        page.redirect('/dashboard')
    }

    return;
}