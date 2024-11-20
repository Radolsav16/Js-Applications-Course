import { render } from "../../node_modules/lit-html/lit-html.js";
import { navTemplate } from "../views/nav.js";
import { userHelper } from "../service/userService.js";
import page from "../../node_modules/page/page.mjs";

const mainElement = document.getElementById('main-element');
const wrapper = document.getElementById('wrapper');


export function renderMain(templateFunc){
    return render(templateFunc(),mainElement);
}


export function initNavigation(ctx,next){
    render(navTemplate(),wrapper); 
    
    next()
}