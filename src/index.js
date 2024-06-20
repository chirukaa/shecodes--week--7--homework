document.addEventListener('DOMContentLoaded', () => getWeather());

let search = document.querySelector('.search-button');
search.addEventListener('click', () => getWeather());

function getWeather() {
  event.preventDefault();
  let apiKey = '5c5bc441t00fef7ob43bb1b47ef1faa0';
  let city = document.querySelector('.search-input').value || 'Paris';
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
  axios.get(url).then(displayTemperature);
}


function displayTemperature(response) {
  let temp = Math.round(response.data.temperature.current);
  console.log(response.data);
  
let cityName = document.querySelector('.current-city');
 cityName.innerHTML = `${response.data.city}`

  let tempData = document.querySelector('.current-temp');
  tempData.innerHTML= `${temp}`

  
  let humidityData = document.querySelector('#current-humidity strong');
  humidityData.innerHTML = `${response.data.temperature.humidity}%`;

  let windData = document.querySelector('#current-wind');
  windData.innerHTML = `${response.data.wind.speed} km/h`;
  
  let descriptionData = document.querySelector('.current-description');
  descriptionData.innerHTML = `${response.data.condition.description}`;
  

  let iconData = document.querySelector('.current-temperature-icon');
  let iconCode = response.data.condition.icon;
  iconData.innerHTML = `<img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${iconCode}.png" alt="Weather Icon">`;

  let currentDate = new Date(response.data.time * 1000);
  let dateOptions = { weekday: 'long', hour: '2-digit', minute: '2-digit' };
  let formattedDate = currentDate.toLocaleDateString('en-US', dateOptions);

  let dateData = document.querySelector('#current-date');
  dateData.innerHTML = formattedDate;
}
