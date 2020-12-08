// -----------------------------------------------SCRIPT HOURS
// OPEN/CLOSE
let currentTime = document.querySelector('#current-time');

let today = new Date();
let nowDay = today.getDay();
let nowTime = today.getHours() + '.' + today.getMinutes();

let schedule = [11.30, 14.00, 18.00, 22.30];

let openings = document.createElement('p');
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

// DISPLAY OPEN/CLOSE IN SCHEDULE
let nowDayLetters;

let obj = [
    {
        day: 'Monday',
        value:1
    },
    {
        day: 'Tuesday',
        value:2
    },
    {
        day: 'Wednesday',
        value:3
    },
    {
        day: 'Thursday',
        value:4
    },
    {
        day: 'Friday',
        value:5
    },
    {
        day: 'Saturday',
        value:6
    },
    {
        day: 'Sunday',
        value:7
    },
];

for (let elem of obj) {
    if (nowDay==elem.value){
        nowDayLetters=elem.day;
    }
}

let thTable = document.querySelectorAll('th');
let thArr = [];

for(let elem of thTable){
    if(elem.innerText == nowDayLetters){
        thArr.push(elem.innerText);
        elem.parentElement.style.backgroundColor = 'green';
    }
}
// -----------------------------------------------END HOURS