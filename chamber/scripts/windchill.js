// get the two input values of temperature and wind speed,
// check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and
// either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.

const temperature = document.querySelector("#temperature");
const tempInt = parseInt(temperature);

const windSpeed = document.querySelector("#wind-speed");
const speedInt = parseInt(windSpeed);

const windChill = 0;

if (tempInt <= 50) {

    if (speedInt > 3) {

        windChill = tempInt + speedInt;
        document.querySelector("#wind-chill").textContent = windChill;

    }

    else {

        windChill = "N/A";
        document.querySelector("#wind-chill").textContent = windChill;

    }
}

else {

    windChill = "N/A";
    document.querySelector("#wind-chill").textContent = windChill;

}
