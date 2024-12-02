import page from "page";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";

export async function deleteView(){
    const result = confirm('Do you want to delete ?');

    if(result){
        const id = getItemId();
        await api.del(itemEndpoins.id(id));
        page.redirect('/dashboard');
    }

    return;
}