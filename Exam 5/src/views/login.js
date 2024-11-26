import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { userEndpoins } from "../endpoints/userEndpoints.js";
import { api } from "../service/requester.js";
import { setUserData } from "../service/userService.js";
import page  from "../../node_modules/page/page.mjs";

const LoginTemplate = (onLogin) => html `
    <section id="login">
          <div class="form">
            <h2>Login</h2>
            <form class="login-form" @submit = ${onLogin}>
              <input type="text" name="email" id="email" placeholder="email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
              <button type="submit">login</button>
              <p class="message">
                Not registered? <a href="/register">Create an account</a>
              </p>
            </form>
          </div>
        </section>
`;

export function LoginPageView(){
    render(LoginTemplate(onLogin),main);
}


async function onLogin(e) {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const email = formData["email"];
    const password = formData["password"];
    

    if(!email || !password){
        window.alert('Please fill all fields!');
        return;
    }

   

    try {
        const data = await api.post(userEndpoins.login,{ email , password });
        setUserData(data._id,data.email,data.accessToken);
        page.redirect('/')
    }catch(err){
        window.alert(err.message);
    }
}