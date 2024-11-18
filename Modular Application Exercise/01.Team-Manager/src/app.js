import { api } from "./data/api.js";
import page from '../node_modules/page/page.mjs';
import { endpoints } from "./data/endpoints.js";
import { showTeamView } from "./views/teams.js";
import { contextApi } from "./middwares/contextSetter.js";
import { showRegisterView } from "./views/register.js";
import { html,render } from "../node_modules/lit-html/lit-html.js";
import { userHelper } from "./data/userHelper.js";

page(updateCtx);
page('/',showTeamView);
page('/teams',showTeamView);
page('/register',showRegisterView);

page.start();



function updateCtx(ctx,next){
    ctx.render = ctxrender;
    // ctx.goTo = goTo;
    ctx.initNav = initNav;

    next();
}





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

// function goTo(direction){
//     page.redirect(direction);
// }



