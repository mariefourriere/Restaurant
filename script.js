
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

// SCRIPT HOURS
const currentTime = document.querySelector('#current-time');

const today = new Date();
const nowDay = today.getDay();
const nowTime = today.getHours() + '.' + today.getMinutes();

const schedule = [11.30, 14.00, 18.00, 22.30];

const openings = document.createElement('p');
currentTime.appendChild(openings);

if(nowDay > 1 && nowDay <= 6){
    if(nowTime > schedule[0] && nowTime < schedule[1] || nowTime > schedule[2] && nowTime < schedule[3]){
        openings.textContent = `We're opened.`
    }
    else{
        openings.textContent = `We're closed.`
    }
}
else if(nowDay == 7){
    if(nowTime > schedule[0] && nowTime < schedule[1]){
        openings.textContent = `We're opened.`
    }
    else{
        openings.textContent = `We're closed.`
    }
}
else{
    openings.textContent = `We're closed.`
}

