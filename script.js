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