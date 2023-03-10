
// get the two input values of temperature and wind speed,
// check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and
// either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.

const temperature = document.querySelector("#temperature").innerHTML;

const windSpeed = document.querySelector("#wind-speed").innerHTML;

let windChill = 0;

if (temperature <= 50 && windSpeed > 3) {
    windChill = calcWindChill(temperature, windSpeed);
}

else {
    windChill = "N/A";
}

document.querySelector("#wind-chill").textContent = windChill;

function calcWindChill(temp, speed) {
    const windChill = 35.74 + 0.6215 * temp - 35.75 * speed ** 0.16 + 0.4275 * temp * speed ** 0.16;
    return windChill;
}
