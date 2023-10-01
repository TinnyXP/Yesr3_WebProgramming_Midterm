// document.addEventListener('contextmenu', event => event.preventDefault());

let mybutton = document.getElementById("topBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var images = [
  'https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fseal%2Fcolor%2Fseal-horizon-white.png&w=1920&q=100',
  'https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fseal%2Fcolor%2Fseal-quantum-black.png&w=1920&q=100',
  'https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fseal%2Fcolor%2Fseal-velocity-blue.png&w=1920&q=100',
  'https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fseal%2Fcolor%2Fseal-space-grey.png&w=1920&q=100'
];

var image = document.getElementById('image');

function changeImage(index) {
  image.src = images[index];
}