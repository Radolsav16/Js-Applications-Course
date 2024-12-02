import { html , render } from 'lit-html';
import { header } from '../elements/elements.js';
import { getUserId } from '../service/userService.js';

const headerTemplate = (isLog) => html `
      <!-- Navigation -->
      <a id="logo" href="/"
          ><img id="logo-img" src="./images/logo.png" alt=""
        /></a>

        <nav>
          <div>
            <a href="/dashboard">Fun Facts</a>
          </div>

          <!-- Logged-in users -->
           ${isLog ? html ` 
            <div class="user">
            <a href="/create">Add Fact</a>
            <a href="/logout">Logout</a>
          </div>`
          : 
          html `<div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
            
          </div>`}
        

          <!-- Guest users -->
         
        </nav>
`;


export function initNavigation (ctx,next){
    const isLog = getUserId();
    render(headerTemplate(isLog),header)
    next();
}