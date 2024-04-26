"use strict";

const swiper = new Swiper('.swiper',{
    // стрелки
    navigation:{
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    // navigation
    pagination:{
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      },
    },
    //scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    grabCursor: true,
    keyboard:{
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel:{
      sensitivity: 1,
    },
    slideToClickedSlide: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    watchOverflow: true,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: true,
        disableOnInteraction: false,
    },
    // effect: "fade",

    // breakpoints:{
    //   320:{slidesPerview: 1, slidesPerGroup: 1,},
    //   480:{slidesPerview: 2, slidesPerGroup: 2,},
    //   990:{slidesPerview: 3, slidesPerGroup: 3,},
    // },
  });