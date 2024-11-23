import { requesterApi } from "../service/requester.js";
import  page  from "../../node_modules/page/page.mjs"
import { ItemsPoints } from "../service/endpoints.js";
import { getItemId } from "../service/itemService.js";

export function showDeleteView(){
   const toDelete = confirm('Do you want to delete it');

   if(toDelete){
        requesterApi.del(ItemsPoints.idMethod(getItemId()));
        page.redirect('/market');
   }else{
    return
   }

    
}