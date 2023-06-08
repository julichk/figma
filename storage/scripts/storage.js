
document.addEventListener('DOMContentLoaded', async () => {

  const apiKey = '585747f07b393da08b9cfd3594d16e10';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York,us&appid=${apiKey}`;

  async function getWeather() {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      const weatherData = {
        temperature: data.main.temp,
      };
      return weatherData;
    } catch (error) {
      console.log('Сталася помилка, соррі :', error);
      return null;
    }
  }

  function saveWeatherToLocalStorage(weatherData) {
    //збереження даних погоди в localStorage
    localStorage.setItem('weatherData', JSON.stringify(weatherData));
    localStorage.setItem('lastWeatherUpdate', Date.now());
  }

  function getWeatherFromLocalStorage() {
    
    const weatherData = localStorage.getItem('weatherData');
    return weatherData ? JSON.parse(weatherData) : null;
  }

  function isWeatherUpdateNeeded() {
    //перевірка чи треба оновлення погоди
    const lastUpdate = localStorage.getItem('lastWeatherUpdate');
    if (!lastUpdate) {
      return true; 
    }
    const twoHours = 2 * 60 * 60 * 1000; // 2 години в мілісек
    const currentTime = Date.now();
    return currentTime - lastUpdate > twoHours;
  }

  function displayWeatherOnPage(weatherData) {

    const temperatureElement = document.querySelector('.temperature');
    const temperatureCelsius = Math.round(weatherData.temperature - 273.15);
    temperatureElement.textContent = `Temperature: ${temperatureCelsius}°C`;
    
  }

  async function displayWeatherForecast() {
    //отримання даних з локал
    const weatherData = getWeatherFromLocalStorage();

    if (!isWeatherUpdateNeeded()) {
      return displayWeatherOnPage(weatherData);
    }

    //отримання нових даних з серверу 
    const newWeatherData = await getWeatherForecast();

    if (newWeatherData) {
      saveWeatherToLocalStorage(newWeatherData); //зберіігаю дані в локал
      displayWeatherOnPage(newWeatherData);
    } else {
      console.log('Не вдалося отримати дані');
    }
  }

  displayWeatherForecast();
});
