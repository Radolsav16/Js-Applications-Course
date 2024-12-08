import { html ,render } from '../../node_modules/lit-html/lit-html.js'
import { header } from '../elements/elements.js';
import { getUserId } from '../service/userService.js';

const headerTemplate = isLog => html `
    <a id="logo" href="/"><img id="logo" src="./images/logo2.png" alt="img" /></a>
      <nav>
        <div>
          <a href="/dashboard">Marketplace</a>
        </div>

        ${isLog ? html `
          <div class="user">
          <a href="/create">Sell</a>
          <a href="/logout">Logout</a>
        </div>`:
        html `  <div class="guest">
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </div>`}
      </nav>
`;



export function initNavigation(ctx,next){
    const isLog = Boolean(getUserId());
    render(headerTemplate(isLog),header)
    next();
}