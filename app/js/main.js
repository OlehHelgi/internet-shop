const swiper = new Swiper('.accessories__slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    observer: true,
    observeParents: true,
    speed: 800,
    navigation: {
      nextEl: '.arrow-next',
      prevEl: '.arrow-prev',
    },

  });
