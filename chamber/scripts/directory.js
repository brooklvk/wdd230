
const directory = `data/directory.json`;

async function getBusinessData() {
    const response = await fetch(directory);
    const data = await response.json();
    console.table(data.businesses); 
    displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
    const cards = document.querySelector("div.businesses");

    businesses.forEach((business) => {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('p');
        let membership = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = `${business.name}`;
        address.textContent = `${business.address}`;
        phone.textContent = `${business.phone}`;
        url.textContent = `${business.url}`;
        membership.textContent = `${business.membership}`;

        image.setAttribute('src', business.image);
        image.setAttribute('alt', `${business.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', 'auto');

        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(membership);
        card.appendChild(image);
  
        cards.appendChild(card);
    })
}

getBusinessData();



// Visit message 
let visit = now.getMinutes();
localStorage.setItem("visit", visit);

let difference = now.getMinutes() - visit;
localStorage.setItem("difference", difference);

document.querySelector("#visit").innerHTML = difference;

//localStorage.setItem("numberOfVisits", 0);

