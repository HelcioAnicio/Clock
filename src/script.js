const hour = document.querySelector('.hour');
const minute = document.querySelector('.min');
const second = document.querySelector('.sec');

function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours < 10 ? hour.innerHTML = `0${hours}` : hour.innerHTML = hours
    minutes < 10 ? minute.innerHTML = `0${minutes}` : minute.innerHTML = minutes
    seconds < 10 ? second.innerHTML = `0${seconds}` : second.innerHTML = seconds

    setTimeout('time()', 500);
}
