export function clear(){
   const sections = document.querySelectorAll('section');
   sections.forEach((section)=>{
    section.style.display = 'none';
   })
   
}