import { html } from "../../node_modules/lit-html/lit-html.js"


export const navTemplate = (isLogin) => html`
     <header>
        Navigation
        <a id="logo" href="/"
          ><img id="logo" src="./images/logo.png" alt="img"
        /></a>
        <nav>
          <div>
            <a href="/market">Market</a>
          </div>

          ${isLogin === true 
          ? html `
          <div class="user">
            <a href="/sell">Sell</a>
            <a href="/logout">Logout</a>
          </div>`
          : html `
          <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>` 
        }
         
        </nav>
      </header>`    
;

