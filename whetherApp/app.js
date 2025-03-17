

const apikey = "c3df6cc76164efaf15cd565bfccbec8c";
const weatherdata = document.querySelector(".weather-data");
const cityname = document.querySelector("#city-name");
const formEl = document.querySelector("form");
const imgIcon = document.querySelector(".icon");

formEl.addEventListener("submit", (e1) => {
    e1.preventDefault();
    const cityValue = cityname.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);
        if (!response.ok) {
            throw new Error("Network error");
        }

        const data = await response.json();

        const temp = Math.floor(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels Like: ${Math.floor(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ];

        weatherdata.querySelector(".temp").textContent = `${temp}°C`;
        weatherdata.querySelector(".desc").textContent = `${description}`;
        imgIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />`;

        weatherdata.querySelector(".details").innerHTML = details.map((det) => {
            return `<div>${det}</div>`;
        }).join("");

    } catch (err) {
        console.error(err);
    }
}
    
