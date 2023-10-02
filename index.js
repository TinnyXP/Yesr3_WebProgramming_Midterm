// Func cant press right click
document.addEventListener('contextmenu', event => event.preventDefault());

// Func Scroll to Top
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

// Start Func Change EV Color

function changeImageSeal(index) {
  const images = [
    ['/src/Seal_Color/seal-horizon-white.png', 'Horizon white'],
    ['/src/Seal_Color/seal-quantum-black.png', 'Quantum Black'],
    ['/src/Seal_Color/seal-space-grey.png', 'Space Grey'],
    ['/src/Seal_Color/seal-velocity-blue.png', 'Velocity blue']
  ];

  const image = document.getElementById("image");
  const name = document.getElementById("name");
  image.src = images[index][0];
  name.textContent = images[index][1];
};

function changeImageAutto(index) {
  const images = [
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fatto3%2Fcolor%2Fatto3-Red.png&w=1920&q=100', 'Solar'],
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fatto3%2Fcolor%2Fatto3-Blue.png&w=1920&q=100', 'Lagoon'],
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fatto3%2Fcolor%2Fatto3-Green.png&w=1920&q=100', 'Emerald'],
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fatto3%2Fcolor%2Fatto3-Grey.png&w=1920&q=100', 'Graphite'],
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fatto3%2Fcolor%2Fatto3-White.png&w=1920&q=100', 'Frost']
  ];

  const image = document.getElementById("image");
  const name = document.getElementById("name");
  image.src = images[index][0];
  name.textContent = images[index][1];
}

function changeDouST(index) {
  const images = [
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fdolphin%2Fcolor%2Fdolphin-flora-purple-exterior.png&w=1920&q=100', 'Flora Purple'],
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fdolphin%2Fcolor%2Fdolphin-coastal-cream-exterior.png&w=1920&q=100', 'Coastal Cream'],
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fdolphin%2Fcolor%2Fdolphin-coral-pink-exterior.png&w=1920&q=100', 'Coral Pink'],
    ['https://www.reverautomotive.com/_next/image?url=%2Fimages%2Fmodel%2Fdolphin%2Fcolor%2Fdolphin-alaskan-grey-exterior.png&w=1920&q=100', 'Alaskan Grey']
  ];

  const image = document.getElementById("imageST");
  const name = document.getElementById("nameST");
  image.src = images[index][0];
  name.textContent = images[index][1];
}

function changeDouEx(index) {
  const images = [
    ['/src/douphin_Color/dolphin-Mafic Grey.png', 'Mafic Grey'],
    ['/src/douphin_Color/dolphin-Atoll Blue.png', 'Atoll Blue'],
    ['/src/douphin_Color/dolphin-Coral Pink.png', 'Coral Pink'],
    ['/src/douphin_Color/dolphin-Surge White.png', 'Surge White']
  ];

  const image = document.getElementById("imageEx");
  const name = document.getElementById("nameEx");
  image.src = images[index][0];
  name.textContent = images[index][1];
}

// End Func Change EV Color
