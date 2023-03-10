
const temperature = document.querySelector('#temperature');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
const windSpeed = document.querySelector('#wind-speed');
const windChill = document.querySelector('#wind-chill');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Manassa&units=imperial&appid=f3e31394eb86ed958067f299ae42b4c7`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data); 
            displayResults(data);
        } 
        else {
            throw Error(await response.text());
        }
    } 
    catch (error) {
        console.log(error);
    }
  }

function displayResults(weatherData) {
    const temp = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    temperature.innerHTML = temp;

    const speed = weatherData.wind.speed;
    windSpeed.innerHTML = speed;

    const src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    icon.setAttribute('src', src);
    icon.setAttribute('alt', desc);
    caption.textContent = desc;

    let chill = "N/A";
    if (temp <= 50 && speed > 3) {
        chill = (35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16);
    }
    windChill.textContent = chill;
}

apiFetch();
