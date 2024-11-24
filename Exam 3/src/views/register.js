import {html , render} from '../../node_modules/lit-html/lit-html.js';
import { elments } from '../service/elements.js';
import { UserPoints } from '../service/endpoints.js';
import { api } from '../service/requester.js';
import page from '../../node_modules/page/page.mjs'
import { setUserData } from '../service/userService.js';

const registerTemplate = () => html `
           <section id="register">
          <div class="form">
            <img class="border" src="./images/border.png" alt="" />
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
    render(registerTemplate(),elments.main);
}


async function onRegister(e){
    e.preventDefault();

    const formDate = Object.fromEntries(new FormData(e.target).entries());

    const email = formDate["email"];
    const password = formDate["password"];
    const rePassword = formDate["re-password"];
   
    if(!email || !password || !rePassword){
        window.alert('Please fill all fields!');
        return;
    } 

    if(rePassword !==  password){
        window.alert('Password dont match Repassword');
        return;
    }


    try{
    
    
    const data = await api.post(UserPoints.register,{ email , password });

    setUserData(data._id,data.email,data.accessToken);

    page.redirect('/')
    }catch(err){
        window.alert('Cant register! Try again!');
    }

    
    
}