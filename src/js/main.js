// Custom scripts

//burger
let burgerMenu = document.querySelector(".menu__icon");
function burger() {
  burgerMenu.classList.toggle("_active");
  document.body.classList.toggle("_lock");
  document.querySelector(".menu__body").classList.toggle("_active");
}
burgerMenu.addEventListener("click", burger);

// We call this function if we need to fix the menu when scrolling.
function fixedNav() {
  const nav = document.querySelector(".header");
  const items = document.querySelector(".header__items");
  // here we indicate in pixels how much we need to scroll so that our menu becomes fixed
  const breakpoint = 1;
  if (window.scrollY >= breakpoint) {
    nav.classList.add("fixed__nav");
    document.body.classList.add("_top");
    items.classList.add("_height");
  } else {
    nav.classList.remove("fixed__nav");
    document.body.classList.remove("_top");
  }
}
window.addEventListener("scroll", fixedNav);

//swiper

const reviewsSwiper = document.querySelector(".swiper__innovation");
if (reviewsSwiper) {
  const swiper = new Swiper(".swiper__innovation", {
    navigation: {
      nextEl: ".swiper-arrow-next",
      prevEl: ".swiper-arrow-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px

      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 650px
      650: {
        slidesPerView: 3,
        spaceBetween: 20,
      },

      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}

