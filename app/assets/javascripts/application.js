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


  // init controller
  var controller = new ScrollMagic.Controller();

    $(function () { // wait for document ready
    // build scene
    var scene = new ScrollMagic.Scene({triggerElement: "nav"})
            .setPin("nav")
            // .addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
            .addTo(controller);
  });