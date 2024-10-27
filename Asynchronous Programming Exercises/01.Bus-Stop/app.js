function getInfo() {
    const stopInput = document.querySelector('#stopId');
    let busId = stopInput.value;
    let url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;
    const div = document.querySelector('#stopName');
    const ul = document.querySelector('#buses');

        fetch(url)
            .then(res => res.json())
            .then(data => {
              div.textContent = data.name;
                Object.keys(data.buses)
                    .forEach((bus)=>{
                        const li = document.createElement('li');
                        li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`
                        ul.appendChild(li);
                    })
            })
            .catch(err => {
                div.textContent = 'Error'
            }
            );
    
}