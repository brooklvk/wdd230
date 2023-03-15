
//const directory = `https://brooklvk.github.io/wdd230/chamber/data/directory.json`;
const directory = `data/directory.json`;


async function getBusinessData() {
    const response = await fetch(directory);
    const data = await response.json();
    console.table(data.businesses); 
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    // const spotlights = document.querySelector("#spotlights");

    const spotlight1Name = document.querySelector("#spotlight1 h2");
    const spotlight1Info = document.querySelector("#spotlight1 p");

    const spotlight2Name = document.querySelector("#spotlight2 h2");
    const spotlight2Info = document.querySelector("#spotlight2 p");

    const spotlight3Name = document.querySelector("#spotlight3 h2");
    const spotlight3Info = document.querySelector("#spotlight3 p");

    let random = Math.floor(Math.random() * (10 - 1) + 1);

    // choose a random business 
    let randomBusiness = businesses[random];

    // add that business info to 1 
    spotlight1Name.innerHTML = randomBusiness.name;
    spotlight1Info.innerHTML = 

    // same for 2 and 3 

}

getBusinessData();

