const globalFunctions = {
  initializeProductSwipers: (
    thumbsSwiperSelector = ".product-thumbnails-swiper",
    swiperSelector = ".product-swiper",
    sectionSelector = "section"
  ) => {
    let thumbsSwiper;
    let swiper;
    if (
      document.querySelector(swiperSelector) !== null &&
      document.querySelectorAll(swiperSelector + " .swiper-slide").length > 1
    ) {
      if (document.querySelector(thumbsSwiperSelector) !== null) {
        thumbsSwiper = new Swiper(thumbsSwiperSelector, {
          speed: 600,
          spaceBetween: 16,
          slidesPerView: "auto",
          shortSwipers: false,
          longSwipers: true,
          loop: true,
          navigation: {
            nextEl: sectionSelector + " .swiper-thumbs-button-next",
            prevEl: sectionSelector + " .swiper-thumbs-button-prev",
          },
          on: {
            init() {
              this.el.addEventListener("click", (e) => {
                if (e.target.classList.contains("swiper-slide")) {
                  this.clickedIndex = e.target.dataset.mediaPosition;
                }
              });
            },
          },
        });
      }
      if (document.querySelector(swiperSelector) !== null) {
        swiper = new Swiper(swiperSelector, {
          speed: 600,
          spaceBetween: 100,
          loop: true,
          calculateHeight: true,
          autoHeight: true,
          shortSwipers: false,
          longSwipers: true,

          navigation: {
            nextEl: sectionSelector + " .swiper-button-next",
            prevEl: sectionSelector + " .swiper-button-prev",
          },
          thumbs: {
            swiper: thumbsSwiper ? thumbsSwiper : null,
          },
        });
      }
    }
  },
};
