import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

document.addEventListener("turbolinks:load", function() {
  const swiperElements = document.querySelectorAll('.swiper-container');
  
  swiperElements.forEach(function(swiperElement) {
    new Swiper(swiperElement, {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
});