import page  from "../../node_modules/page/page.mjs";
import { itemEndpoins } from "../endpoints/ItemEndpoints.js";
import { getItemId } from "../service/itemService.js";
import { api } from "../service/requester.js";

export async function deleteView(){
    const result = confirm('Do you want to delete motorcycle?');
    const id =getItemId();
    if(result){
        await api.del(itemEndpoins.id(id))
        page.redirect('/dashboard')
    }

    return;
}