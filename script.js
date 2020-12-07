let myBasketButton = document.querySelector("body > header > nav > div.nav-right.nav-menu > span > a");

let clicked = false;

const recapOrder =(e) => {
    console.log(e);
let recapDiv = document.createElement('div');
recapDiv.classList.add('recapDiv');
recapDiv.innerHTML="coucou";
document.body.appendChild(recapDiv);
}

myBasketButton.addEventListener("click", recapOrder);