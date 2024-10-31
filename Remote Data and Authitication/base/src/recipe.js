const form = document.querySelector('form');

form.addEventListener('submit',createRecipe);


function createRecipe(e){
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target).entries());

    data.ingredients = data.ingredients.split('\n');
    data.steps = data.steps.split('\n');

 
    const url = 'http://localhost:3030/data/recipes';

    fetch(url,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "X-Authorization": `${localStorage.getItem('token')}`
        },
        body:JSON.stringify(data)
    })

    .then(res => res.json())
    .then(data => {
        location.href = 'file:///C:/Users/Lenovo/OneDrive/Desktop/druga%20javascript%20papka/Javascript/SoftUni/Js-Applications-Course/Remote Data and Authitication/base/index.html';
     
    })
    .catch(err => console.log(err));
    
  

    

    
    
}