let myBasketButton = document.querySelector("body > header > nav > div.nav-right.nav-menu > span > a");

let main = document.querySelector('main')

let clicked = true;
let recapDiv = document.createElement("div");
recapDiv.textContent="You can find the recap of your order below:"

main.appendChild(recapDiv);
recapDiv.classList.add("recapDiv");

const recapOrder = (e) => {

    if (clicked) {
        console.log("clicked:", clicked);
        recapDiv.style.right="0";
        clicked = false;
    } else {
        console.log(clicked);
        recapDiv.style.right = "-30%";
        clicked = true;
    }   
}


myBasketButton.addEventListener("click", recapOrder);