document.getElementById("weatherForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const city = document.getElementById("cityInput").value;
    if (!city) return;

    try {
        // Obtener coordenadas de la ciudad
        const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es`);
        const geoData = await geoResponse.json();
        
        if (!geoData.results || geoData.results.length === 0) {
            alert("Ciudad no encontrada");
            return;
        }

        const { latitude, longitude, name } = geoData.results[0];

        // Obtener el clima usando Open-Meteo
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto`);
        const weatherData = await weatherResponse.json();

        const currentWeather = weatherData.current_weather;
        const dailyForecast = weatherData.daily;

        // Actualizar datos en pantalla
        document.getElementById("cityName").textContent = `Clima en ${name}`;
        document.getElementById("temperature").textContent = `Temperatura actual: ${currentWeather.temperature}°C`;
        document.getElementById("condition").textContent = `Condición: ${currentWeather.weathercode}`;

        // Preparar datos para la gráfica
        const labels = dailyForecast.time.map(date => date.split("-").slice(1).join("/")); // Formato MM/DD
        const tempMax = dailyForecast.temperature_2m_max;
        const tempMin = dailyForecast.temperature_2m_min;

        // Destruir gráfica anterior si existe
        if (window.myChart) {
            window.myChart.destroy();
        }

        // Dibujar nueva gráfica
        const ctx = document.getElementById("weatherChart").getContext("2d");
        window.myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: labels,
                datasets: [
                    {
                        label: "Temperatura Máxima (°C)",
                        data: tempMax,
                        backgroundColor: "rgba(255, 99, 132, 0.5)",
                        borderColor: "red",
                        borderWidth: 2
                    },
                    {
                        label: "Temperatura Mínima (°C)",
                        data: tempMin,
                        backgroundColor: "rgba(54, 162, 235, 0.5)",
                        borderColor: "blue",
                        borderWidth: 2
                    }
                ]
            }
        });

    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
});
