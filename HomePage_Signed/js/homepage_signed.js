$(document).ready(function(){
  $('.fa-bars').click(function () {
    $('.header-right-bottom-nav').slideToggle(1000);
  });
  $('.click-drop-menu').click(function () {
    $('.menu-drop-down').slideToggle(1000);
  });

  $('.click-drop-menu').click(function () {
    $('.click-drop-menu label').toggleClass('fa-minus');
  });

  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
  });
});