/* let now = new Date();
let time = now.toLocaleTimeString();
console.log(time)
let show = document.getElementById('heading');

setInterval(() => {
    show.innerHTML = new Date().toLocaleTimeString()
}, 1000); */



/* let clock = document.getElementById("clock");

function updateClock(){

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zero
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

// Run every 1 second
setInterval(updateClock, 1000);

// Call once immediately
updateClock(); */

let show = document.getElementById('heading')
let t = document.getElementById('time')
let duration = document.getElementById('ampm')

function clock(){
    let now = new Date();
    let hours = now.getHours();
    // console.log(hours)
    let minutes = now.getMinutes();
    // console.log(minutes);
    let seconds = now.getSeconds();
    // console.log(seconds)
    // adding leading zero
    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds
    }
    if(hours >= 12){
        duration.innerHTML = 'PM'
    }
    if(hours < 12){
        duration.innerHTML = 'AM'
    }
// show.innerHTML = `${hours}:${minutes}:${seconds}`
t.innerHTML = `${hours}:${minutes}:${seconds}`
}

setInterval((clock),1000)
clock()

let dating = document.getElementById('dating')
function two(){
    let dt = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let today = dt.getDay();
    let currentDay = days[today];
    console.log(currentDay)

    // months
    let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = dt.getMonth();
console.log(month)
let currentMonth = months[month];
console.log(currentMonth);
// date 
let currentDate = dt.getDate();
console.log(currentDate);
let currentYear = dt.getFullYear();
console.log(currentYear)
dating.innerHTML = `${currentMonth} ${currentDate}, ${currentYear} ${currentDay}`
document.getElementById('date').innerHTML = `${currentMonth} ${currentDate}, ${currentYear}`
}
two()