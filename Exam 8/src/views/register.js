import page  from "../../node_modules/page/page.mjs";
import { html , render } from "../../node_modules/lit-html/lit-html.js";
import { main } from "../elements/elements.js";
import { userEndpoins } from "../endpoints/userEndPoints.js";
import { api } from "../service/requester.js";
import { setUserData } from "../service/userService.js";

const RegisterTemplate = (onRegister) => html `
   <section id="register">
          <div class="form">
            <h2>Register</h2>
            <form class="register-form" @submit = ${onRegister}>
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
`;


export function registerPageView(){
    render(RegisterTemplate(onRegister),main)
}

async function onRegister(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());
    const email = formData["email"];
    const password = formData["password"];
    const rePassword = formData["re-password"];

    if(!password || !email || !rePassword){
        window.alert('Please fill all fields!');
        return;
    }

    if(password !== rePassword){
        window.alert('Password should match!');
        return;
    }

    try{
        const data = await api.post(userEndpoins.register,{ email , password });
        setUserData(data._id,data.accessToken);
        
        page.redirect('/');
    }catch(err){
        window.alert(err.message);
    }
}