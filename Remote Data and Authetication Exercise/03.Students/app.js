const url = 'http://localhost:3030/jsonstore/collections/students';

displayStudents(url)

const tbody = document.querySelector('tbody');

const [firtsNameInput,lastNameInput,facilityNumberInput,gradeInput] = document.querySelectorAll('input');

const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click',attachToTable);

function attachToTable(e){
    e.preventDefault();
   
    
    const firstName = firtsNameInput.value;
    const lastName = lastNameInput.value;
    const facultyNumber = facilityNumberInput.value;
    const grade = gradeInput.value;

    if(firstName === '' || lastName === "" || facultyNumber === '' || grade === '') return;

    for(let el of facultyNumber){
        if (!typeof(Number(el))){
            return;

        }
    }

    if(! typeof(Number(grade))){
        return;
    }

    
    
    
    


    createStudent(url,firstName,lastName,facultyNumber,grade)

    
}

async function createStudent(url,firstName,lastName,facultyNumber,grade){
    const res = await fetch(url,{
        method:'Post',
        headers:{
            'Content-Type':'apllication/json'
        },
        body:JSON.stringify({firstName,lastName,facultyNumber,grade})
    });
    const data =  await res.json();
   
    createTableRow(data)
   
    clear();
    
   
    
}

async function displayStudents(url){
    const res = await fetch(url);
    const data = await res.json();

    Object.values(data)
        .forEach((obj)=>{
           createTableRow(obj)
        })


}



function createTableRow(obj){
    
    const tr = document.createElement('tr');

    const tdFisrtName = document.createElement('td');
    tdFisrtName.textContent = obj.firstName;

    const tdlastName = document.createElement('td');
    tdlastName.textContent = obj.lastName;

    const tdfac = document.createElement('td');
    tdfac.textContent = obj.facultyNumber;

    const tdgrade = document.createElement('td');
    tdgrade.textContent = obj.grade;

    tr.appendChild(tdFisrtName)
    tr.appendChild(tdlastName)
    tr.appendChild(tdfac)
    tr.appendChild(tdgrade);

    tbody.appendChild(tr)
}   


function clear(){
    firtsNameInput.value = '';
    lastNameInput = '';
    facilityNumberInput.value = '';
    gradeInput.value = '';
}