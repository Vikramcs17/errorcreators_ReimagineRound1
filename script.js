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

let previewContainer = document.querySelector('.products-preview');
let previewBoxes = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product => {
  product.onclick = () => {
      previewContainer.style.display = 'flex';
      let name = product.getAttribute('data-name');
      previewBoxes.forEach(preview => {
          let target = preview.getAttribute('data-target');
          if (name === target) {
              preview.classList.add('active');
          } else {
              preview.classList.remove('active'); 
          }
      });
  };
});

previewBoxes.forEach(preview => {
  preview.querySelector('.fa-times').onclick = (event) => {
      event.stopPropagation(); 
      preview.classList.remove('active');
      previewContainer.style.display = 'none';
  };
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.preview') && !event.target.closest('.product')) {
      previewBoxes.forEach(preview => {
          preview.classList.remove('active');
      });
      previewContainer.style.display = 'none';
  }
});


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
  const loginButton = document.querySelector(".login ");
  const loginPreviewContainer = document.querySelector(".login-preview");

  loginButton.addEventListener("click", function() {
    loginPreviewContainer.style.display = "block";
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

  // Added by me
  function toggleNav() {
      var sidenav = document.getElementById("mySidenav");
      if (sidenav.style.width === "0px" || sidenav.style.width === "") {
          sidenav.style.width = "250px";
      } else {
          sidenav.style.width = "0px";
      }
  }
  
  function openLoginPopup() {
      document.getElementById("loginModal").style.display = "block";
  }
  
  function closeLoginPopups() {
      document.getElementById("loginModal").style.display = "none";
  }

  function openLoginPopup() {
    document.getElementById("loginnModal").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("loginnModal").style.display = "none";
}
  
  // Optional: To close the modal when clicking outside of it
  window.onclick = function(event) {
      var modal = document.getElementById("loginModal");
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
