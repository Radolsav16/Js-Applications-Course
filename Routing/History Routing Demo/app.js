const div = document.querySelector('#root');

window.addEventListener('popstate',(e)=>{
    router[location.pathname]();  
})


const nav = document.querySelector('header');
    nav.addEventListener('click',(e)=>{
       if(e.target.tagName !== 'A') return;

       e.preventDefault();
        
        
        const url = new URL(e.target.href);
        const pathname = url.pathname;

        history.pushState(null,null,pathname);
        window.dispatchEvent(new Event('popstate'))

        router[pathname]();
        
     
        
        
    })

const router = {
    '/':homePage,
    '/catalog':catologPage,
    '/recipes':recipesPage
}



function homePage(){
    div.innerHTML = `
        <p>Home Page</p>
    `
}


function catologPage(){
    div.innerHTML = `
        <p>Catalog</p>
    `
}


function recipesPage(){
    div.innerHTML = `
        <p>Recipes Page</p>
    `
}


