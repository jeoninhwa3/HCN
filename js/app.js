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

// jquery
$(function() {
	bestClick();
    tabMenu();
})

//best-goods click event  
function bestClick() {
    $('.goods-slide .swiper-slide').click(function() {
		$('.goods-slide .swiper-slide').removeClass('active');
		$(this).addClass('active');

		idx = $(this).index() + 1;
		$('.best-data').removeClass('on');
		$('.data' + idx).addClass('on');
    })
}

// select-box click event
const selectBox = document.querySelector('.select-box');
const selOption = document.querySelector('.select-box .option');

function selectBoxClick(e) {
    e.preventDefault();	
    if (selectBox.classList.contains('open')) {
        selectBox.classList.remove('open');
    } else {
        selectBox.classList.add('open');
    }

    selOption.classList.toggle('open');
}

selectBox.addEventListener('click', selectBoxClick);

// common tabMenu
function tabMenu() {
    $('.tab-nav li').click(function() {

        let thisTab = $(this).attr('data-tabNumb');
		$('.tab-nav li').removeClass('on');
		$(this).addClass('on');

        $('.tab-con').removeClass('active');
        $(`.${thisTab}`).addClass('active');
            

		// // idx2 = $(this).index() + 1;
		// // $('.tab-con').removeClass('active');
		// // $('.tab0' + idx).addClass('active');
    })
}