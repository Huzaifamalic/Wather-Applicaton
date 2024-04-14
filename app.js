const form = document.getElementById('searchForm');
const input = document.getElementById('cityInput');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    const city = input.value;
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ecf07bafe5f67fa8a66abd728beb563b`);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        const icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        weatherIcon.src = icon;
        temperature.textContent = `${data.main.temp} °C`;
        description.textContent = data.weather[0].description;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
});
