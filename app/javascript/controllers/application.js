import { Application } from "@hotwired/stimulus"

const application = Application.start()

// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }

document.addEventListener('turbolinks:load', function() {
  // Find all Swiper containers
  const swiperContainers = document.querySelectorAll('.swiper-container');

  // Loop through each Swiper container to initialize a unique Swiper instance
  swiperContainers.forEach((container, index) => {
    new Swiper('.swiper-' + index, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next-' + index, // Target unique next button
        prevEl: '.swiper-button-prev-' + index, // Target unique prev button
      },
      pagination: {
        el: '.swiper-pagination-' + index, // Add pagination if needed
        clickable: true,
      },
    });
  });
});
