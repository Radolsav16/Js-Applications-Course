const form = document.querySelector('form');

const url = 'http://localhost:3030/users/login';

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
       
        localStorage.setItem('token',data.accessToken);
        localStorage.setItem('email',data.email);

        location.href = 'file:///C:/Users/Lenovo/OneDrive/Desktop/druga%20javascript%20papka/Javascript/SoftUni/Js-Applications-Course/WorkShop2/base/index.html';

        
    })
    .catch(err => console.log(err));
}