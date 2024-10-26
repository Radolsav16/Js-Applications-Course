function loadRepos() {
   const url = 'https://api.github.com/users/testnakov/repos';
   const divEl = document.getElementById('res');
   
   const httpRequest = new XMLHttpRequest();

   httpRequest.addEventListener('readystatechange',()=>{
      if(httpRequest.status === 200 && httpRequest.readyState === 4){
         divEl.textContent = httpRequest.responseText;
      }
   })

   httpRequest.open('GET',url);
   httpRequest.send();
   
}