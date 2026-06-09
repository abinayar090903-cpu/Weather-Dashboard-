const apiKey = "e24f8d7c69689c8cf117a258a3b7974a";

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const result = document.getElementById("weatherResult");

    if (city === "") {
        result.innerHTML = "<p style='color:red;'>Please enter a city name</p>";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );

        const data = await response.json();

        if (data.cod != 200) {
            throw new Error(data.message);
        }

        result.innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>🌬 Wind Speed: ${data.wind.speed} m/s</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        result.innerHTML = `
            <p style="color:red;">
                Error: ${error.message}
            </p>
        `;
    }
}
