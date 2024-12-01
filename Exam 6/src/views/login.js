import { main } from "../elements/elements.js";
import { userEndpoins } from "../endpoints/userEndpoints.js";
import { html , render } from "../lib/litI.js";
import { page } from "../lib/pageI.js";
import { api } from "../service/requester.js";
import { setUserData } from "../service/userService.js";

const loginTemplate = (onLogin) => html `
   <section id="login">
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
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
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;


export function loginPageView(){
    render(loginTemplate(onLogin),main)
}


async function onLogin(e) {
    e.preventDefault();
    const  formData = Object.fromEntries(new FormData(e.target).entries());
    const email = formData["email"];
    const password = formData['password'];

    if(!email || !password){
        window.alert('Please fill all fields');
        return;
    }

    console.log(email,password);
    

    try{

    const data = await api.post(userEndpoins.login, { email , password });
    setUserData(data._id,data.accessToken);

    page.redirect('/')

    }catch(err){
        window.alert('Cant login!');
       
    }

}