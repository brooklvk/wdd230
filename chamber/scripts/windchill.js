// get the two input values of temperature and wind speed,
// check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and
// either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.

const temperature = parseInt(document.querySelector("#temperature"));

const windSpeed = parseInt(document.querySelector("#wind-speed"));

if (temperature <= 50) {

    if (windSpeed > 3) {

        const windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed ** 0.16 + 0.4275 * temperature * windSpeed ** 0.16;
        document.querySelector("#wind-chill").textContent = windChill;

    }

    else {

        const windChill = "N/A";
        document.querySelector("#wind-chill").textContent = windChill;

    }
}

else {

    const windChill = "N/A";
    document.querySelector("#wind-chill").textContent = windChill;

}
