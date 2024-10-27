const url = 'http://localhost:3030/jsonstore/advanced/articles/list';
const section = document.querySelector('#main');
fetch(url)
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
            const divAccordition = document.createElement('div');
            divAccordition.className = 'accordition';

            const divHead = document.createElement('div');
            divHead.className = 'head';

            const span = document.createElement('span');
            span.textContent = obj.title;

            const button = document.createElement('button');
            button.className = 'button';
            button.id = obj._id;
            button.textContent = 'More';

           

            divHead.appendChild(span);
            divHead.appendChild(button);

            divAccordition.appendChild(divHead);

            section.appendChild(divAccordition)

            button.addEventListener('click',(e)=>{
                const urlId = `http://localhost:3030/jsonstore/advanced/articles/details/${obj._id}`;

                fetch(urlId)
                    .then(res => res.json())
                    .then(data => {

                        const p = document.createElement('p');
                        p.textContent = data.content;

                        if(button.textContent === 'Less'){
                            const p = divAccordition.querySelector('p');
                            divAccordition.removeChild(p);
                            button.textContent = 'More';
                        }else{
                            divAccordition.appendChild(p);
                            button.textContent = 'Less';
                        }
                    })
                    .catch(err => console.log(err))
                 
                    
            })
        });
    })
    .catch(err => console.log(err));

