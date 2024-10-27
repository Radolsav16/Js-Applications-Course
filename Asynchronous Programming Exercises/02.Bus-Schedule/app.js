function solve() {

    const infoBox = document.querySelector('.info');
    const inputDepart = document.querySelector('#depart');
    const inputArrive = document.querySelector('#arrive');

    let id  = 'depot';
    let name = '';

    function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                inputDepart.disabled = true;
                inputArrive.disabled = false;

                name = data.name;

                infoBox.textContent = `Next stop ${name}`;

                id = data.next;


            }  
            )
            .catch(err=>{
                infoBox.textContent = 'Error';
                inputDepart.disabled = true;
                inputDepart.disabled = true;
            });

            
    }

    function arrive() {
        inputDepart.disabled = false;
        inputArrive.disabled = true;
        infoBox.textContent = `Arriving at ${name}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();