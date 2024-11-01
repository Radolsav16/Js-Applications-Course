import { clear } from "./sectionDisplay.js";
const sectionElement = document.querySelector('#register-section');
const form = sectionElement.querySelector('form');

form.addEventListener('submit',registerUser)


function registerUser(e){
    e.preventDefault();
    
    const data = new FormData(e.target);
    
    const obj = Object.fromEntries(data.entries());
   
    for(let keys in obj){
        if(!obj[keys]){
            return;
        }
    }

    const url = 'http://localhost:3030/users/register';

    fetch(url,{
        method:"POST",
        headers:{
           'Content-Type': 'application/json',
        },
        body:JSON.stringify(obj)
    })

    .then(res => res.json())
    .then(data => {
        localStorage.setItem('id',data._id);
        localStorage.setItem('token',data.accessToken);
        localStorage.setItem('email',data.email);

        location.href = '/';
    })
    .catch(err => console.log(err));
}

 export function registerDisplay(){
    clear()
    sectionElement.style.display = 'block';   
}