function lockedProfile() {
    const url = `http://localhost:3030/jsonstore/advanced/profiles`;
    const main = document.querySelector('#main');
    let id = 1;
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            Object.keys(data)
                .forEach((person)=>{
                        let personObj = data[person]; 
                        createElement(personObj,id)
                       
                    id++;
                })
            })
        .catch(err => console.log(err));


        function createElement(person,id){
            const divProfile = document.createElement('div');
            divProfile.className = 'profile';

            const imgIconProfile = document.createElement('img');
            imgIconProfile.src = './iconProfile2.png';
            imgIconProfile.className = 'userIcon';

            const labelLock = document.createElement('label');
            labelLock.textContent = 'Lock';

            const inputLock = document.createElement('input');
            inputLock.value = "lock";
            inputLock.checked = true;
            inputLock.name = `user${id}Locked`;
            inputLock.type = 'radio';


            const labelUnlock = document.createElement('label');
            labelUnlock.textContent = 'Unlock';

            const inputUnlock = document.createElement('input');
            inputUnlock.value = "Unlock";
            inputUnlock.checked = false;
            inputUnlock.name = `user${id}Locked`;
            inputUnlock.type = 'radio';

            const br = document.createElement('br');

            const hr = document.createElement('hr');


            const labelUsername = document.createElement('label');
            labelUsername.textContent = 'Username';

            const inputUsername = document.createElement('input');
            inputUsername.value = person.username;
            inputUsername.disabled = true;
            inputUsername.name = `user${id}Username`;
            inputUsername.type = 'text';


            divProfile.appendChild(imgIconProfile);
            divProfile.appendChild(labelLock);
            divProfile.appendChild(inputLock);
            divProfile.appendChild(labelUnlock);
            divProfile.appendChild(inputUnlock);
            divProfile.appendChild(br);
            divProfile.appendChild(hr);
            divProfile.appendChild(labelUsername);
            divProfile.appendChild(inputUsername);


            const hiddenDiv = document.createElement('div');
            hiddenDiv.id = `user${id}HiddenFields`;
            hiddenDiv.style.display = 'none';


            hiddenDiv.appendChild(hr);

            const labelEmail = document.createElement('label');
            labelEmail.textContent = 'Email:';

            const inputEmail = document.createElement('input');
            inputEmail.value = person.email;
            inputEmail.disabled = true;
            inputEmail.name = `user${id}Email`;
            inputEmail.type = 'email';


            
            const labelAge = document.createElement('label');
            labelAge.textContent = 'Age:';

            const inputAge = document.createElement('input');
            inputAge.value = person.age;
            inputAge.disabled = true;
            inputAge.name = `user${id}Age`;
            inputAge.type = 'email';


            hiddenDiv.appendChild(labelEmail);
            hiddenDiv.appendChild(inputEmail);
            hiddenDiv.appendChild(labelAge);
            hiddenDiv.appendChild(inputAge);
        

            divProfile.appendChild(hiddenDiv);

            const buttonShow = document.createElement('button');
            buttonShow.textContent = 'Show More';

            divProfile.appendChild(buttonShow);

            buttonShow.addEventListener('click',(e)=>{
                const currEl = e.target;
                const currProfileDiv = currEl.closest('div');
                const labelUnlock = currProfileDiv.querySelector('input[value="Unlock"]');
                const hiddenDiv = currProfileDiv.querySelectorAll('div')[0];
            
                

                
                if(labelUnlock.checked === true){
                    hiddenDiv.style.display = 'block';
                    buttonShow.textContent = 'Hide it';
                }else{
                    hiddenDiv.style.display = 'none';
                    buttonShow.textContent = 'Show more'
                }
                
                
                
            })


            main.appendChild(divProfile)





            






        }
       
}