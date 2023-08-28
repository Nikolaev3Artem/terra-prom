var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const swiper1 = new Swiper(".production-swiper", {
    slidesPerView: 2,
    spaceBetween: 8,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 8
          },
        1024: {
          slidesPerView: 4,
          spaceBetween: 8
        },
    }
});

const swiper2 = new Swiper(".products-slider", {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
          slidesPerView: 2,
          spaceBetween: 8
        },
  }
});