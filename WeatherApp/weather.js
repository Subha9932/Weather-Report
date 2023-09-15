const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f8bec71fa7msh259279937216dfap169c46jsn52c920f779e6',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const cityName = document.querySelector('.cityName');
const temp = document.querySelector('#temp'); // Add corresponding elements
const feels_like = document.querySelector('#feels_like'); // Add corresponding elements
const humidity = document.querySelector('#humidity'); // Add corresponding elements
const humidity2 = document.querySelector('#humidity2'); // Add corresponding elements
const min_temp = document.querySelector('#min_temp'); // Add corresponding elements
const max_temp = document.querySelector('#max_temp'); // Add corresponding elements
const wind_speed = document.querySelector('#wind_speed'); // Add corresponding elements
const wind2 = document.querySelector('#wind2'); // Add corresponding elements
const wind_degrees = document.querySelector('#wind_degrees'); // Add corresponding elements
const sunrise = document.querySelector('#sunrise'); // Add corresponding elements
const sunset = document.querySelector('#sunset'); // Add corresponding elements
const temp1 = document.querySelector('#temp1'); // Add corresponding elements
const tempPur = document.querySelector('#tempPur'); // Add corresponding elements
const cityInput = document.querySelector('#city');

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
    .then(response => response.json())
    .then(response => {
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind2.innerHTML = response.wind_speed + " Km/h";
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp1.innerHTML = response.temp + "C";
    })
    .catch(err => console.error(err));

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Puruliya', options)
    .then(response => response.json())
    .then(response => {
      tempPur.innerHTML = response.temp;
      feels_likePur.innerHTML = response.feels_like;
      humidityPur.innerHTML = response.humidity;
      min_tempPur.innerHTML = response.min_temp;
      max_tempPur.innerHTML = response.max_temp;
      wind_speedPur.innerHTML = response.wind_speed;
      wind_degreesPur.innerHTML = response.wind_degrees;
      sunrisePur.innerHTML = response.sunrise;
      sunsetPur.innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
};

const submit = document.querySelector('#submit');
submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent form submission
  getWeather(cityInput.value);
});

// Fetch initial weather data for "Delhi"
getWeather("Delhi");
