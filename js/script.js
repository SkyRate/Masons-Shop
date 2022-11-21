'use strict'
new Swiper('.stock-slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   effect: 'fade',
   fadeEffect: {
      crossFade: true
   },
   simulateTouch: false,
   loop: true,
   autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true
   },
   speed: 1000,
});
new Swiper('.example__slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   simulateTouch: false,
   loop: true,
   autoplay: {
      delay: 5000,
      stopOnLastSlide: false,
      disableOnInteraction: true
   },
   speed: 1000,
   slidesPerView: 3,
   breakpoints: {
      992: {
         slidesPerView: 3,
      },
      0: {
         slidesPerView: 1,
      },
   }
});

$('.top__item').click(function (event) {
   let i = $(this).data('filter');
   if (i == 1) {
      $('.top-item__body').show();
   } else {
      $('.top-item__body').hide();
      $('.top-item__body.f_' + i).show();
   };
   $('.top__item').removeClass('active');
   $(this).addClass('active');

   return false;
});
$('.face__menu-class').click(function (event) {
   $('.face__menu-class').removeClass('active2');
   $(this).addClass('active2');
   return false;
});
$('.face__item-lang').click(function (event) {
   $('.face__item-lang').removeClass('active1');
   $(this).addClass('active1');
   return false;
});


$('.s_1').click(() => {
   $('html, body').animate({
      scrollTop: $('.services').offset().top
   }, 200);
}); $('.face__logo-img').click(() => {
   $('html, body').animate({
      scrollTop: $('.face').offset().top
   }, 200);
});
$('.s_4').click(() => {
   $('html, body').animate({
      scrollTop: $('.top').offset().top
   }, 200);
});
$('.s_3').click(() => {
   $('html, body').animate({
      scrollTop: $('.stock').offset().top
   }, 200);
});
$('.s_5').click(() => {
   $('html, body').animate({
      scrollTop: $('.connect').offset().top
   }, 200);
});
$('.services').hover(function () {
   $('.face__menu-class').removeClass('active2');
   $('.s_1').addClass('active2');
   return false;
});
$('.stock').hover(function () {
   $('.face__menu-class').removeClass('active2');
   $('.s_3').addClass('active2');
   return false;
});
$('.connect').hover(function () {
   $('.face__menu-class').removeClass('active2');
   $('.s_5').addClass('active2');
   return false;
});
$('.top').hover(function () {
   $('.face__menu-class').removeClass('active2');
   $('.s_4').addClass('active2');
   return false;
});
$('.long-kolvo__plus').click(function () {
   var $price = $(".long-kolvo__chislo input");
   $price.val(parseInt($price.val()) + 1);
   $price.change();
});
$('.long-kolvo__minus').click(function plus() {
   var $price = $(".long-kolvo__chislo input");
   $price.val(parseInt($price.val()) - 1);
   $price.change();
});
$('.face__burger, .s_1 , .s_3, .s_4, .s_5').click(function (event) {
   $('.face__burger,.face__menu-column').toggleClass('active3');
   $('body').toggleClass('lock');
});