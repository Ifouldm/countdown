const links = document.getElementsByClassName('social-link');

const targetDate = moment('2021-04-05T00:00:00+00:00');

const days = document.getElementById('Days');
const hours = document.getElementById('Hours');
const minutes = document.getElementById('Minutes');
const seconds = document.getElementById('Seconds');

setInterval(() => {
    const duration = moment.duration(targetDate.diff(moment()));
    days.textContent = duration.days().toString().padStart(2,'0');
    hours.textContent = duration.hours().toString().padStart(2,'0');
    minutes.textContent = duration.minutes().toString().padStart(2,'0');
    seconds.textContent = duration.seconds().toString().padStart(2,'0');
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