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