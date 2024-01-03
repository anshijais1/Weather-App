
const apiKey = "e3a068f45ff319e171a4952e6772b7cf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const head=document.querySelector("#head")
const temp = document.querySelector("#temp");
const mintemp = document.querySelector("#mintemp");
const maxtemp = document.querySelector("#maxtemp");
let button = document.querySelector("#button");
const humidityElement= document.querySelector("#humid");
const pressureElement = document.querySelector("#pressure");


button.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".div input");
  let city = amount.value;
  head.innerText=`Weather of ${city}`;

  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json();

    // Check if the API request was successful
    if (response.ok) {
      const main = data.main;
      const temperature = main.temp;
      const mintemperature = main.temp_min;
      const maxtemperature = main.temp_max;

      // Update the temperature on the webpage
      temp.textContent = `Temperature: ${temperature}°C`;

      // Update the minimum temperature on the webpage
      mintemp.textContent = `Minimum Temperature: ${mintemperature}°C`;

      // Update the maximum temperature on the webpage
      maxtemp.textContent = `Maximum Temperature: ${maxtemperature}°C`;
      // Inside your successful API response block
const humidity = main.humidity;
const pressure = main.pressure;

// Display humidity and pressure on the webpage
humidityElement.textContent = `Humidity: ${humidity}%`;
pressureElement.textContent = `Pressure: ${pressure} hPa`;
const windSpeedElement = document.querySelector("#windspeed");
const windDirectionElement = document.querySelector("#winddirection");

// ...

// Inside your successful API response block
const windSpeed = data.wind.speed;
const windDirection = data.wind.deg;

// Display wind speed and direction on the webpage
windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;
windDirectionElement.textContent = `Wind Direction: ${windDirection}°`;

    } else {
      console.error(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
});
