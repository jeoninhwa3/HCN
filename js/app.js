// main slide
var swiper = new Swiper(".main-mySwiper", {
    cssMode: true,
    loop:true,
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".slide-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  // best-goods slide
  var swiper = new Swiper(".goods-mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".slide-pagination",
      clickable: true,
    },
  });

  // vod-intro
  var swiper = new Swiper(".vod-mySwiper", {
    slidesPerView: 3,
    spaceBetween: 100,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: ".btn-next",
      prevEl: ".btn-prev",
    },
    pagination: {
      el: ".slide-pagination",
      clickable: true,
    },
  });