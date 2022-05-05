const advertSwiperSetting = {
  direction: "horizontal",
  loop: true,
  autoHeight: true,

  navigation: {
    nextEl: ".advert-swiper-control__arrow_next",
    prevEl: ".advert-swiper-control__arrow_prev",
  },
};

const lotsSwiperSetting = {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoHeight: true,
  slidesPerView: 3,
  navigation: {
    nextEl: ".slider-lots-control__arrow_next",
    prevEl: ".slider-lots-control__arrow_prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },

    980: {
      slidesPerView: 3,
    },
  },
};

new Swiper(".advert-swiper", advertSwiperSetting);

new Swiper(".slider-lots", lotsSwiperSetting);
