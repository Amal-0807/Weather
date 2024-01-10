document.getElementById('searchBtn').addEventListener('click', function() {
    const cityInput = document.getElementById('cityInput').value;
    if (cityInput.trim() !== '') {
        getWeatherData(cityInput);
    }
});

function getWeatherData(city) {
    const apiKey = '14ccbb28b9d545f2f3b1478380e68967';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfoDiv = document.getElementById('weatherInfo');
    const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius

    const weatherHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${temperature}°C</p>
    `;

    weatherInfoDiv.innerHTML = weatherHTML;
}




