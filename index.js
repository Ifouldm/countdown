const links = document.getElementsByClassName('social-link');

//const targetDate = moment('2021-04-05T00:00:00+00:00');
const targetDate = moment().endOf('month');

const days = document.getElementById('Days');
const hours = document.getElementById('Hours');
const minutes = document.getElementById('Minutes');
const seconds = document.getElementById('Seconds');
const duration = moment.duration(targetDate.diff(moment()));

days.addEventListener("transitionend", () => days.classList.remove('flip'), true);
hours.addEventListener("transitionend", () => hours.classList.remove('flip'), true);
minutes.addEventListener("transitionend", () => minutes.classList.remove('flip'), true);
seconds.addEventListener("transitionend", () => seconds.classList.remove('flip'), true);

setInterval(() => {  
    let daysRemaining = duration.days().toString().padStart(2, '0');
    let hoursRemaining = duration.hours().toString().padStart(2, '0');
    let minutesRemaining = duration.minutes().toString().padStart(2, '0');
    let secondsRemaining = duration.seconds().toString().padStart(2, '0');
    if (days.firstElementChild.textContent != daysRemaining) {
        days.firstElementChild.textContent = daysRemaining
        days.classList.add('flip');
    }
    if (hours.firstElementChild.textContent != hoursRemaining) {
        hours.firstElementChild.textContent = hoursRemaining
        hours.classList.add('flip');
    }
    if (minutes.firstElementChild.textContent != minutesRemaining) {
        minutes.firstElementChild.textContent = minutesRemaining
        minutes.classList.add('flip');
    }
    if (seconds.firstElementChild.textContent != secondsRemaining) {
        seconds.firstElementChild.textContent = secondsRemaining
        seconds.classList.add('flip');
    }
    duration.subtract(1, 's') 
}, 1000);

links[0].addEventListener('mouseover', () => {
    links[0].src = './images/icon-facebook-over.svg';
});

links[0].addEventListener('mouseout', () => {
    links[0].src = './images/icon-facebook.svg';
});

links[1].addEventListener('mouseover', () => {
    links[1].src = './images/icon-pinterest-over.svg';
});

links[1].addEventListener('mouseout', () => {
    links[1].src = './images/icon-pinterest.svg';
});

links[2].addEventListener('mouseover', () => {
    links[2].src = './images/icon-instagram-over.svg';
});

links[2].addEventListener('mouseout', () => {
    links[2].src = './images/icon-instagram.svg';
});