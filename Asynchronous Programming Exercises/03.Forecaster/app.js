function attachEvents() {
  const inputLocation = document.querySelector("#location");
  const submitButton = document.querySelector("#submit");

  let url = "http://localhost:3030/jsonstore/forecaster/locations";

  const divForecast = document.querySelector("#forecast");
  const upcoming = document.querySelector('#upcoming')

  const weatherEmojis = {
    Sunny: "&#x2600", // ☀
    "Partly sunny": '&#x26C5', // ⛅
    Overcast: "&#x2601;", // ☁
    Rain: "&#x2614", // ☂
    Degrees: "&#176", // °
  };

 
  



  submitButton.addEventListener("click", () => {
    let location = inputLocation.value;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        divForecast.style.display = "block";
        let obj = data.find((a) => a.name === location);
        let code = obj.code;

        let urlConditon = `http://localhost:3030/jsonstore/forecaster/today/${code}`;

        fetch(urlConditon)
          .then((res) => res.json())
          
          .then((data) => {
            const current = document.querySelector('#current');
            current.innerHTML = `<div class="label">Current conditions</div>`
           
            const div = document.createElement('div');
            div.className = 'forecasts';

            const spanSymbol = document.createElement('span');
            spanSymbol.classList.add('condition','symbol');
            spanSymbol.innerHTML = weatherEmojis[data.forecast.condition];

            const spanCondition = document.createElement('span');
            spanCondition.className = 'condition';

            createSpans(data.name,spanCondition);
            createSpans(`${data.forecast.low + weatherEmojis['Degrees']}/${data.forecast.high + weatherEmojis['Degrees']}`,spanCondition);
            createSpans(data.forecast.condition,spanCondition);
            
            div.appendChild(spanSymbol);
            div.appendChild(spanCondition);

            current.appendChild(div);
            
            
          })
          .catch((err) => console.log(err));

        let urlForeCast = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;

        fetch(urlForeCast)
          .then((res) => res.json())
          .then((data) => {

            upcoming.innerHTML = `<div class="label">Three-day forecast</div>`

            const forecastInfo = document.createElement('div');
            forecastInfo.className = 'forecast-info';
            upcoming.appendChild(forecastInfo);
            

            data.forecast.forEach(element => {
                const spanUpcoming = document.createElement('span');
                spanUpcoming.className = 'upcoming';
    
                const spanSymbol = document.createElement('span');
                spanSymbol.className = 'symbol';
                spanSymbol.innerHTML = weatherEmojis[element.condition];
    
                const spanDegress = document.createElement('span');
                spanDegress.className = 'forecast-data';
                spanDegress.innerHTML = `${element.low + weatherEmojis['Degrees']}/${element.high + weatherEmojis['Degrees']}`
    
                const spanConditon = document.createElement('span');
                spanConditon.className = 'forecast-data';
                spanConditon.innerHTML = element.condition;
    
    
                spanUpcoming.appendChild(spanSymbol);
                spanUpcoming.appendChild(spanDegress);
                spanUpcoming.appendChild(spanConditon);
    
                forecastInfo.appendChild(spanUpcoming)
    
            });
            
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        divForecast.textContent = "Error";
      });

      inputLocation.value = '';
  });
}

function createSpans(content,attacher){
    const span = document.createElement('span');
    span.className = 'forecast-data';
    span.innerHTML = content;
    attacher.appendChild(span);
}

attachEvents();


