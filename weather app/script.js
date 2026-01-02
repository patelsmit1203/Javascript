
const apiKey = "8f460554e07d9d3a294a89fa48258a9a";  
const apiBase = "https://api.openweathermap.org/data/2.5/";


const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-container input");
const locationBtn = document.querySelector(".location-btn");
const cityElement = document.querySelector(".city-info h1");
const dateElement = document.querySelector(".city-info p");
const tempElement = document.querySelector(".temp-value span:first-child");
const descElement = document.querySelector(".weather-desc");
const mainIcon = document.querySelector(".weather-icon-large");
const feelsLikeElement = document.querySelector(".details-list p:nth-child(1)");
const humidityElement = document.querySelector(".details-list p:nth-child(2)");
const windElement = document.querySelector(".details-list p:nth-child(3)");
const forecastContainer = document.querySelector(".forecast-container");


function getWeatherIcon(weatherMain) {
    switch (weatherMain.toLowerCase()) {
        case 'clouds': return 'fa-cloud';
        case 'clear': return 'fa-sun';
        case 'rain': return 'fa-cloud-rain';
        case 'drizzle': return 'fa-cloud-showers-heavy';
        case 'mist': return 'fa-smog';
        case 'haze': return 'fa-smog';
        case 'snow': return 'fa-snowflake';
        case 'thunderstorm': return 'fa-bolt';
        default: return 'fa-cloud-sun';
    }
}


function updateDate() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options);
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    dateElement.innerHTML = `${dateStr} | ${timeStr}`;
}


async function checkWeather(city) {
    try {
        
        const response = await fetch(`${apiBase}weather?q=${city}&units=metric&appid=${apiKey}`);
        if (!response.ok) {
            alert("City not found!");
            return;
        }
        const data = await response.json();

       
        cityElement.innerHTML = data.name;
        tempElement.innerHTML = Math.round(data.main.temp);
        descElement.innerHTML = data.weather[0].description;
        
        
        mainIcon.className = `fa-solid ${getWeatherIcon(data.weather[0].main)} weather-icon-large`;

        
        feelsLikeElement.innerHTML = `<i class="fa-solid fa-temperature-half"></i> Feels like: ${Math.round(data.main.feels_like)}°C`;
        humidityElement.innerHTML = `<i class="fa-solid fa-droplet"></i> Humidity: ${data.main.humidity}%`;
        windElement.innerHTML = `<i class="fa-solid fa-wind"></i> Wind: ${data.wind.speed} km/h`;

        updateDate(); 

        
        getForecast(data.coord.lat, data.coord.lon);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}


async function getForecast(lat, lon) {
    const response = await fetch(`${apiBase}forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
    const data = await response.json();

   
    const dailyData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    
    forecastContainer.innerHTML = "";

   
    dailyData.slice(0, 5).forEach(day => {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
        const iconClass = getWeatherIcon(day.weather[0].main);
        const minTemp = Math.round(day.main.temp_min);
        const maxTemp = Math.round(day.main.temp_max);

        
        const dayCard = `
            <div class="forecast-day">
                <p class="day">${dayName}</p>
                <i class="fa-solid ${iconClass}" style="${iconClass === 'fa-sun' ? 'color: #fdb813;' : ''}"></i>
                <p class="temp-range">${maxTemp}° - ${minTemp}°</p>
                <p class="desc">${day.weather[0].main}</p>
            </div>
        `;
        forecastContainer.innerHTML += dayCard;
    });
}


searchBtn.addEventListener("click", () => {
    checkWeather(searchInput.value);
});

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        checkWeather(searchInput.value);
    }
});


checkWeather("New York");