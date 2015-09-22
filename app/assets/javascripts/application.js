// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require slick.js/slick/slick


  // init controller
  var controller = new ScrollMagic.Controller();

    $(function () { // wait for document ready
    // build scene
    var scene = new ScrollMagic.Scene({
      triggerElement: 'nav',
      triggerHook: 0, // don't trigger until #pinned-trigger1 hits the top of the viewport
      duration: 0,
      reverse: true // allows the effect to trigger when scrolled in the reverse direction
    })
    .setPin("nav")
            // .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
            .addTo(controller);
          });

// $(document).ready(function() {

//   $(window).scroll(function () {
//     // viewportHeight = $(window).height();
//     // navbarHeight = $('nav').height();
//     var navOffsetTop = $('nav').offset().top

//     if ($(window).scrollTop() > navOffsetTop) {
//       $('nav').addClass('fixed-top');
//     }
//     console.log(navOffsetTop);
//     if ($(window).scrollTop() < navOffsetTop) {
//       $('nav').removeClass('fixed-top');
//     }
//   });
// });

//SLICK CAROUSEL:
$(document).ready(function(){
  $('.photo-carousel').slick({
    arrows: true,
    autoplay: true,
    // dots: true,
    // adaptiveHeight: true,
    autoplaySpeed: 6000,
    speed: 1000,
    accessibility: true,
  });
});

//SMOOTH SCROLLING:
$(document).ready(function(){
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
      return false;
      }
    }
  });
});