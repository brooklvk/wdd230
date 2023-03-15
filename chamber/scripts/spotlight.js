
//const directory = `https://brooklvk.github.io/wdd230/chamber/data/directory.json`;
const directory = `data/directory.json`;


async function getBusinessData() {
    const response = await fetch(directory);
    const data = await response.json();
    console.table(data.businesses); 
    displayBusinesses(data.businesses);
}

const disyBusses = (businesses) => {
    // const spotlights = document.querySelector("#spotlights");

    const spotlight1Name = document.querySelector("#spotlight1 h2");
    const spotlight1Info = document.querySelector("#spotlight1 p");

    const spotlight2Name = document.querySelector("#spotlight2 h2");
    const spotlight2Info = document.querySelector("#spotlight2 p");

    const spotlight3Name = document.querySelector("#spotlight3 h2");
    const spotlight3Info = document.querySelector("#spotlight3 p");

    chooseBusiness(businesses);
    

    // add that business info to 1 
    spotlight1Name.innerHTML = randomBusiness.name;
    spotlight1Info.innerHTML = `Phone: ${randomBusiness.phone}`;

    // same for 2 and 3 

}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector("#spotlights");

    businesses.forEach((business) => {
        let card = document.querySelector("#spotlight1");
        let h2 = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let url = document.createElement("p");
        let membership = document.createElement("p");
        let image = document.createElement("img");

        h2.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        url.textContent = `${business.url}`;
        membership.textContent = `Membership: ${business.membership}`;

        image.setAttribute("src", business.img);
        image.setAttribute("alt", business.alt);
        image.setAttribute("loading", "lazy");
        image.setAttribute("width", "340");
        image.setAttribute("height", "auto");

        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(membership);
        card.appendChild(image);
  
        cards.appendChild(card);
    })
}

const chooseBusiness = (businesses) => {
    // choose a random business 
    let random = Math.floor(Math.random() * (9 - 1) + 1);
    let randomBusiness = businesses[random];

    if (randomBusiness.membership == "Gold" || randomBusiness.membership == "Silver") {
        
    }

    else {
        chooseBusiness(businesses);
    }

}

getBusinessData();

