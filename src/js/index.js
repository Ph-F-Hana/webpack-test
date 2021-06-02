const css = require('../css/style.scss');
const img = require('../image/img.jpg');

const $ = q => document.querySelector(q);

// let image = document.createElement('img');
// image.src = img;

// $('.profile').appendChild(image);

$('img').addEventListener('click', () => {
  alert(`This is picture`);  
})