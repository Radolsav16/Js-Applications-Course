



const [emailInput,passwordInput,rePassword,submitInput] = document.querySelectorAll('input');


const form = document.querySelector('form');

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
       
        localStorage.setItem('token',data.accessToken);
        localStorage.setItem('email',data.email);

        location.href = 'file:///C:/Users/Lenovo/OneDrive/Desktop/druga%20javascript%20papka/Javascript/SoftUni/Js-Applications-Course/Remote Data and Authitication/base/index.html';
        

        
    })
    .catch(err => console.log(err));
}