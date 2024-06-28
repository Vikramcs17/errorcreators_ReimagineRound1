var swiperPage1 = new Swiper('.swiper-container.page1', {
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiperPage1-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiperPage1-button-next',
    prevEl: '.swiperPage1-button-prev',
  },
});


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});

// Add event listener to close the preview when clicking outside of it
preveiwContainer.onclick = (event) => {
    if (!event.target.closest('.preview')) {
        previewBox.forEach(preview => {
            preview.classList.remove('active');
        });
        preveiwContainer.style.display = 'none';
    }
};

const container = document.querySelector('.rainbow');
const letters = container.querySelectorAll('.letter');

// Define the start and end colors for the gradient
const startColor = { r: 255, g: 0, b: 0 }; // Red
const endColor = { r: 0, g: 0, b: 255 };   // Blue

container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const totalLetters = letters.length;
    const letterWidth = rect.width / totalLetters;
    const index = Math.floor(x / letterWidth);

    if (index >= 0 && index < totalLetters) {
        const prevLetter = letters[index - 1];
        const currentLetter = letters[index];
        const nextLetter = letters[index + 1];

        const gradientRatio = x / rect.width;
        const color1 = interpolateColor(startColor, endColor, gradientRatio);
        const color2 = interpolateColor(startColor, endColor, gradientRatio + 0.1);

        if (prevLetter) prevLetter.style.color = color1;
        if (currentLetter) currentLetter.style.color = color2;
        if (nextLetter) nextLetter.style.color = color1;
    }
});

container.addEventListener('mouseleave', () => {
    letters.forEach(letter => {
        letter.style.color = '#000'; // Reset color to original
    });
});

// Helper function to interpolate between two colors
function interpolateColor(color1, color2, ratio) {
    const r = Math.round(color1.r + (color2.r - color1.r) * ratio);
    const g = Math.round(color1.g + (color2.g - color1.g) * ratio);
    const b = Math.round(color1.b + (color2.b - color1.b) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
}

document.addEventListener("DOMContentLoaded", function() {
  const loginButton = document.querySelector(".login button");
  const loginPreviewContainer = document.querySelector(".login-preview");

  loginButton.addEventListener("click", function() {
    loginPreviewContainer.style.display = "block";
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu');
  const logo = document.querySelector('.logo');
  const one = document.querySelector('.one');
  const wrapinput18 = document.querySelector('.wrap-input-18');
  const logincontainer = document.querySelector('.login-container');
  const navbar = document.querySelector('.navbar');

  let isVisible = false;

  menu.addEventListener('click', () => {
      navbar.classList.toggle('navbar-visible');
      logo.classList.toggle('active');
      one.classList.toggle('active');
      wrapinput18.classList.toggle('active');
      logincontainer.classList.toggle('active');
      menu.classList.toggle('active');

      isVisible = !isVisible;
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.querySelector(".menu");
  const logo = document.querySelector(".logo-resp");

  menuIcon.addEventListener("click", function() {
    logo.style.display = logo.style.display === "none" ? "block" : "none";
  });
});

var splide = new Splide( '.splide', {
    type   : 'loop',
    // padding: '10rem',
    pagination: true,
    autoplay: true,
    loop: true,
    interval: 3000, // autoplay interval in milliseconds
  } );
  
  splide.mount();
