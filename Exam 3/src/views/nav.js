import {html , render} from '../../node_modules/lit-html/lit-html.js';
import { elments } from '../service/elements.js';
import { getUserData } from '../service/userService.js';

const navTemp = (isLooged) => html `
      <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo2.png" alt="logo"/>
        </a>
<nav>
          <div>
            <a href="/dashboard">Solutions</a>
          </div>

          ${isLooged ? html ` 
            <div class="user">
            <a href="/create">Add Solution</a>
            <a href="/logout">Logout</a>
          </div>`
          : html `
           <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>`}
         
         
 </nav>
`;


export function initNav(ctx,next){
    const isLooged = Boolean(getUserData())
    render(navTemp(isLooged),elments.header);
    next();
}