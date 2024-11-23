import { html, render } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../service/userService.js";


export const main = document.querySelector('#main-element');


const userDiv = document.querySelector('.user');
const guestDiv = document.querySelector('.guest');



export function casualRender(tempFunction){
     render(tempFunction(),main)
}



function initNavigation(){
    const isLooged = userHelper.getUserId();

    

    
    
   

    if(isLooged){
        guestDiv.style.display = 'none';
        userDiv.style.display = 'inline-block';

    }else{
        guestDiv.style.display = 'inline-block';
        userDiv.style.display = 'none';
        
    }
}


export function middleWare(ctx,next){
    initNavigation();
    next();
}