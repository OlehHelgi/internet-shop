const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu--active');
})

const viewList = document.querySelector('.view-mode__btn--list');
const viewGrid = document.querySelector('.view-mode__btn--grid');
const viewContainer = document.querySelector('.view-mode__container');

viewGrid.addEventListener('click', () => {
  viewContainer.classList.add('view-mode__container--grid');
  viewContainer.classList.remove('view-mode__container--list');
});

viewList.addEventListener('click', () => {
  viewContainer.classList.add('view-mode__container--list');
  viewContainer.classList.remove('view-mode__container--grid');
});


const viewButtons = document.querySelectorAll('.view-mode__btn');
viewButtons.forEach(clickedButton => {
  clickedButton.addEventListener('click', () => {
    viewButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    clickedButton.classList.add('active');
  });
});

const viewButtonsNav = document.querySelectorAll('.blog__nav-btn');
viewButtonsNav.forEach(clickedButton => {
  clickedButton.addEventListener('click', () => {
    viewButtonsNav.forEach(btn => {
      btn.classList.remove('active');
    });
    clickedButton.classList.add('active');
  });
});


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

const swiperReviews = new Swiper('.reviews-slider', {
  slidesPerView: 9,
  spaceBetween: 16,
  loop: true,

  navigation: {
    nextEl: '.reviews-slider-next',
    prevEl: '.reviews-slider-prev',
  },

  pagination: {
    el: ".reviews-slider-pagination",
    type: "fraction",
  },

});

const rangeSlider = document.querySelector('.range__slider');
const inputMin = document.querySelector('.range__min');
const inputMax = document.querySelector('.range__max');

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    'min': 300,
    'max': 3000
  },
  format: {
    to: value => Math.round(value),
    from: value => Number(value)
  }
});

rangeSlider.noUiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    inputMin.value = values[0]
  } else {
    inputMax.value = values[1]
  }
})

inputMin.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([inputMin.value, null])
})

inputMax.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([null, inputMax.value])
});