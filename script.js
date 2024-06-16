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

