// import { logOut } from "./logout.js";
import { makeDom } from "./home.js";
import { registerDisplay } from "./regsiter.js";
import { displayLogin } from "./login.js";
import { makeRecipe } from './recipe.js';
import { homePage } from "./home.js";
import { logOut } from "./logout.js";

const navigator = {
  '/':homePage,
  '/create':makeRecipe,
  '/logaout':logOut,
  '/login':displayLogin,
  '/register':registerDisplay
}

function navigationInit(){
  const email = localStorage.getItem('email');
  let currDiv;

  if(email && email !== 'undefined'){
    const divUser = document.querySelector('#user');
    divUser.style.display = 'block';
    currDiv = divUser
  }else{
    const divGuest = document.querySelector('#guest');
    divGuest.style.display = 'block';
    currDiv = divGuest
  }

    const aCatalog = document.querySelector('.active');
    const anchorEl = currDiv.querySelectorAll('a');

    anchorEl.forEach((a)=>{
      a.addEventListener('click',attachEventAnchor);
    })

    aCatalog.addEventListener('click',attachEventAnchor);

  
    
}

navigationInit();


function attachEventAnchor(e){
  e.preventDefault();
  const url = e.target.href;
  const urlObj = new URL(url);

  const pathName = urlObj.pathname;

  navigator[pathName]();
}





  

 

  
  
  
