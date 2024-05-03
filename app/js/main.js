"use strict";

const swiper = new Swiper('.header-slider',{
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

  const video_swiper = new Swiper('.video-swiper',{
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
    slidesPerView: 2.25,
    slidesPerGroup: 1,
    spaceBetween: 30,
    watchOverflow: true,
    speed: 1000,
  });
  

  const blog_swiper = new Swiper('.blog-swiper',{
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
    slidesPerView: 3.25,
    slidesPerGroup: 1,
    spaceBetween: 30,
    watchOverflow: true,
    speed: 1000,
  });


  let acc = document.getElementsByClassName("accordion__btn");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }