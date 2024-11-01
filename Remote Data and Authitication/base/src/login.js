import { clear } from "./sectionDisplay.js";


const sectionElement = document.querySelector('#login-section');
const form = sectionElement.querySelector('form');


const url = 'http://localhost:3030/users/login';
const main = document.querySelector('main')





form.addEventListener('submit',loginUser);



function loginUser(e){
    e.preventDefault();

    const obj = Object.fromEntries(new FormData(e.target).entries());
    fetch(url,{
        method:"POST",
        headers:{
           'Content-Type': 'application/json',
        },
        body:JSON.stringify(obj)
    })

    .then(res => res.json())
    .then(data => {

        if(data.code >= 400){
           return  alert(data.message);
        }


        localStorage.setItem('id',data._id);
        localStorage.setItem('token',data.accessToken);
        localStorage.setItem('email',data.email);

        location.href = '/';


        
    })
    .catch(err => console.log(err));
}


export function displayLogin(){
    clear()
    sectionElement.style.display = 'block';
}