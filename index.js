// Func cant press right click
// document.addEventListener('contextmenu', event => event.preventDefault());

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
  image.classList.add("fade-out");
  setTimeout(() => {
    image.src = images[index][0];
    name.textContent = images[index][1];
    image.classList.remove("fade-out");
    image.classList.add("fade-in");
    setTimeout(() => {
      image.classList.remove("fade-in");
    }, 300);
  }, 300);
}

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
  image.classList.add("fade-out");
  setTimeout(() => {
    image.src = images[index][0];
    name.textContent = images[index][1];
    image.classList.remove("fade-out");
    image.classList.add("fade-in");
    setTimeout(() => {
      image.classList.remove("fade-in");
    }, 300);
  }, 300);
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
  image.classList.add("fade-out");
  setTimeout(() => {
    image.src = images[index][0];
    name.textContent = images[index][1];
    image.classList.remove("fade-out");
    image.classList.add("fade-in");
    setTimeout(() => {
      image.classList.remove("fade-in");
    }, 300);
  }, 300);
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
  image.classList.add("fade-out");
  setTimeout(() => {
    image.src = images[index][0];
    name.textContent = images[index][1];
    image.classList.remove("fade-out");
    image.classList.add("fade-in");
    setTimeout(() => {
      image.classList.remove("fade-in");
    }, 300);
  }, 300);
}


const UNIT_PRICE = 4.2; // ค่าคงที่สำหรับค่าไฟต่อหน่วย

function calculateElectricityUsage(distance, batteryCapacity) {
  return (distance / 100) * batteryCapacity;
}

function calculateTotalCost(distance, batteryCapacity) {
  const electricityUsage = calculateElectricityUsage(distance, batteryCapacity);
  return electricityUsage * UNIT_PRICE;
}
// End Func Change EV Color

// Start Function Cal EV Charge Cost
document.addEventListener('DOMContentLoaded', function() {
  const range = document.getElementById('evRangeSlider');
  const output = document.getElementById('kiloMeter');
  const cost = document.getElementById('cost');

  range.addEventListener('input', function() {
    const value = parseInt(range.value * 50).toLocaleString();
    output.textContent = value;
    const electricalQuantity = (value / 82.5).toFixed(2);
    const costValue = (electricalQuantity * 4.2).toLocaleString();
    cost.textContent = costValue;
  });
});
// End Function Cal EV Charge Cost

// start hover glow effect

console.clear();

const cardsContainer = document.querySelector(".cards");
const cardsContainerInner = document.querySelector(".cards__inner");
const cards = Array.from(document.querySelectorAll(".card"));
const overlay = document.querySelector(".overlay");

const applyOverlayMask = (e) => {
  const overlayEl = e.currentTarget;
  const x = e.pageX - cardsContainer.offsetLeft;
  const y = e.pageY - cardsContainer.offsetTop;

  overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
};

const createOverlayCta = (overlayCard, ctaEl) => {
  const overlayCta = document.createElement("div");
  overlayCta.classList.add("cta");
  overlayCta.textContent = ctaEl.textContent;
  overlayCta.setAttribute("aria-hidden", true);
  overlayCard.append(overlayCta);
};

const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const cardIndex = cards.indexOf(entry.target);
    let width = entry.borderBoxSize[0].inlineSize;
    let height = entry.borderBoxSize[0].blockSize;

    if (cardIndex >= 0) {
      overlay.children[cardIndex].style.width = `${width}px`;
      overlay.children[cardIndex].style.height = `${height}px`;
    }
  });
});

const initOverlayCard = (cardEl) => {
  const overlayCard = document.createElement("div");
  overlayCard.classList.add("card");
  createOverlayCta(overlayCard, cardEl.lastElementChild);
  overlay.append(overlayCard);
  observer.observe(cardEl);
};

cards.forEach(initOverlayCard);
document.body.addEventListener("pointermove", applyOverlayMask);

// end hover glow effect