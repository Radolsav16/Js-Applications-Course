import page  from "../../node_modules/page/page.mjs";
import { itemEndpoins } from "../endpoints/itemEndpoints.js";
import { api } from "../service/requester.js";
import { getItemId } from "../service/userService.js";

export async function deleteCar(){
    const result = confirm('Do you want to delete car?');

    if(result){
        await api.del(itemEndpoins.id(getItemId()));
        page.redirect('/dashboard');
    }

    return;
} 