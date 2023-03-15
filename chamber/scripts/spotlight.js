
//const directory = `https://brooklvk.github.io/wdd230/chamber/data/directory.json`;
const directory = `data/directory.json`;

//HTML: div #spotlights, divs #spotlight1 etc 
//CSS: #spotlights, #spotlight1 etc, #spotlight1 p etc 

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

            const spotlights = document.querySelector("#spotlights");

            let spotlight1 = document.createElement("div");
            spotlight1.setAttribute("id", "spotlight1");

            let spotlight1Name = document.createElement("h2");
            let spotlight1Info = document.createElement("p");
            let spotlight1Image = document.createElement("img");

            spotlight1Name.innerHTML = randBusiness.name;
            spotlight1Info.innerHTML = randBusiness.phone;
            spotlight1Image.setAttribute("src", randBusiness.img);
            spotlight1Image.setAttribute("alt", randBusiness.alt);
            spotlight1Image.setAttribute("loading", "lazy");
            spotlight1Image.setAttribute("width", "340");
            spotlight1Image.setAttribute("height", "auto");
            spotlight1Image.src = `${randBusiness.img}`;

            spotlight1.appendChild(spotlight1Name);
            spotlight1.appendChild(spotlight1Info);
            spotlight1.appendChild(spotlight1Image);

            spotlights.appendChild(spotlight1);

            selections++;
            indexes.push(randIndex);
        }
    }



    // const spotlight2Name = document.querySelector("#spotlight2 h2");
    // const spotlight2Info = document.querySelector("#spotlight2 p");

    // const spotlight3Name = document.querySelector("#spotlight3 h2");
    // const spotlight3Info = document.querySelector("#spotlight3 p");
}

getBusinessData();

