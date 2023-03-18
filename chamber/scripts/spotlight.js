
const directory = `https://brooklvk.github.io/wdd230/chamber/data/directory.json`;
//const directory = `data/directory.json`;

const numBusinesses = 8;

async function getBusinessData() {
    const response = await fetch(directory);
    const data = await response.json();
    console.table(data.businesses); 
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    let membershipFiltered = businesses.filter((business) => business.membership == "Gold" || business.membership == "Silver");
    let indexes = [];
    let selections = 0;
    while (selections < 3) {
        let randIndex = Math.floor(Math.random() * membershipFiltered.length);

        if (!indexes.includes(randIndex)) {
            
            let randBusiness = membershipFiltered[randIndex];

            const spotlights = document.querySelector(".spotlights");

            let spotlight = document.createElement("div");
            spotlight.setAttribute("class", "spotlight");

            let spotlightName = document.createElement("h2");
            let spotlightInfo = document.createElement("p");
            let spotlightImage = document.createElement("img");

            spotlightName.innerHTML = `Business Spotlight: ${randBusiness.name}`;
            spotlightInfo.innerHTML = randBusiness.phone;
            spotlightImage.setAttribute("src", randBusiness.img);
            spotlightImage.setAttribute("alt", randBusiness.alt);
            spotlightImage.setAttribute("loading", "lazy");
            spotlightImage.setAttribute("height", "auto");
            spotlightImage.src = `${randBusiness.img}`;

            spotlight.appendChild(spotlightName);
            spotlight.appendChild(spotlightInfo);
            spotlight.appendChild(spotlightImage);

            spotlights.appendChild(spotlight);

            selections++;
            indexes.push(randIndex);
        }
    }
}

getBusinessData();

