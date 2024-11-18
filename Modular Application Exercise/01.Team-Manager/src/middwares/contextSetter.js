import page from "../../node_modules/page/page.mjs";
import { render } from "../../node_modules/lit-html/lit-html.js";
import { userHelper } from "../data/userHelper.js";


function ctxrender(temp){
    render(temp,document.querySelector('main'));
}

function initNav(){
    const links = Array.from(document.querySelectorAll('nav>a'));
    const user = userHelper.getUserData();
    
    if(user){
       links
       .filter((a) => a.innerText === 'Login' || a.innerText === 'Register')
       .map(a => a.style.display = 'none');
    } else {
        links
        .filter((a) => a.innerText !== 'Login' && a.innerText !== 'Register')
        .map(a => a.style.display = 'none');
    }   


}

function goTo(direction){
    page.redirect(direction);
}


export const contextApi = {
    ctxrender,
    initNav,
    goTo
} 