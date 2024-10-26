
console.log(document.querySelector('body'))


// const url = 'http://localhost:3030/jsonstore/cookbook/recipes';


// const main = document.getElementsByTagName('main');





// function createElements(recipe){
           
//             const article = document.createElement('article');
//             article.class = 'preview';
            
//             const divTitle = document.createElement('div');
//             divTitle.class= 'title';

//             const h2 = document.createElement('h2');
//             h2.textContent = recipe.name;

//             divTitle.appendChild(h2);

//             const divSmall = document.createElement('div');
//             divSmall.className = 'small';

//             const img = document.createElement('img');
//             img.src = recipe.img;

//             divSmall.appendChild(img);

//             article.appendChild(divTitle);
//             article.appendChild(divSmall);

// }
// fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         Object.keys(data)
//             .forEach((key)=>{
//                 let obj = data[key];
//                 createElements(obj)  
//             })
//     })
//     .catch(err => console.log(err));