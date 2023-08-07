const API_KEY = '9ca9f51990a43e2b0ec7700115dce116';
let defaultCity = 'Kyiv';
let inputCity = document.querySelector('.weather__input');
let weatherBtn = document.querySelector('.weather__btn');
let weatherLocation = document.querySelector('.weather__city');
let weatherTemperature = document.querySelector('.weather__temperature');
let weatherDescription = document.querySelector('.weather__description');

function fetchData(city) {
    let weatherError = document.querySelector('.weather__error');
    weatherError.style.visibility = 'hidden';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
    .then(response => response.json())
    .then(displayData) 
    .catch(err => weatherError.style.visibility = 'visible'); 
}

const displayData=(weather)=>{
    weatherLocation.innerText=`${weather.name}, ${weather.sys.country}`;
    weatherTemperature.innerText=`${weather.main.temp}°C`;
    weatherDescription.innerText=`${weather.weather[0].description}`;
}

weatherBtn.addEventListener('click', () => {
    let city = inputCity.value; 
    fetchData(city); 
});

fetchData(defaultCity);