'use strict';

// populate copyright in footer with current year
const copyrightYear = document.querySelector('.copyright-year');
const now = new Date();
copyrightYear.innerHTML = now.getFullYear();

jQuery(function() { 
  // What Why How Events
  $("#what-event").on( "click", function () {
    $("#what-sect").show();
    $("#why-sect").hide();
    $("#how-sect").hide();

    $("#what-event").addClass("active");
    $("#why-event").removeClass("active");
    $("#how-event").removeClass("active");
  });

  $("#why-event").on( "click", function () {
    $("#why-sect").show();
    $("#what-sect").hide();
    $("#how-sect").hide();

    $("#why-event").addClass("active");
    $("#what-event").removeClass("active");
    $("#how-event").removeClass("active");
  });

  $("#how-event").on( "click", function () {
    $("#how-sect").show();
    $("#what-sect").hide();
    $("#why-sect").hide();

    $("#how-event").addClass("active");
    $("#why-event").removeClass("active");
    $("#what-event").removeClass("active");
  });

  // City Events
  $("#austin-event").on( "click", function () {
    $("#austin-sect").show();
    $("#dallas-sect").hide();
    $("#elPaso-sect").hide();
    $("#houston-sect").hide();
    $("#sanAntonio-sect").hide();

    $("#austin-event").addClass("active");
    $("#dallas-event").removeClass("active");
    $("#elPaso-event").removeClass("active");
    $("#houston-event").removeClass("active");
    $("#sanAntonio-event").removeClass("active");
  });

  $("#dallas-event").on( "click", function () {
    $("#dallas-sect").show();
    $("#austin-sect").hide();
    $("#elPaso-sect").hide();
    $("#houston-sect").hide();
    $("#sanAntonio-sect").hide();

    $("#dallas-event").addClass("active");
    $("#austin-event").removeClass("active");
    $("#elPaso-event").removeClass("active");
    $("#houston-event").removeClass("active");
    $("#sanAntonio-event").removeClass("active");
  });

  $("#elPaso-event").on( "click", function () {
    $("#elPaso-sect").show();
    $("#austin-sect").hide();
    $("#dallas-sect").hide();
    $("#houston-sect").hide();
    $("#sanAntonio-sect").hide();

    $("#elPaso-event").addClass("active");
    $("#austin-event").removeClass("active");
    $("#dallas-event").removeClass("active");
    $("#houston-event").removeClass("active");
    $("#sanAntonio-event").removeClass("active");
  });

  $("#houston-event").on( "click", function () {
    $("#houston-sect").show();
    $("#dallas-sect").hide();
    $("#elPaso-sect").hide();
    $("#austin-sect").hide();
    $("#sanAntonio-sect").hide();

    $("#houston-event").addClass("active");
    $("#dallas-event").removeClass("active");
    $("#elPaso-event").removeClass("active");
    $("#austin-event").removeClass("active");
    $("#sanAntonio-event").removeClass("active");
  });

  $("#sanAntonio-event").on( "click", function () {
    $("#sanAntonio-sect").show();
    $("#dallas-sect").hide();
    $("#elPaso-sect").hide();
    $("#houston-sect").hide();
    $("#austin-sect").hide();

    $("#sanAntonio-event").addClass("active");
    $("#dallas-event").removeClass("active");
    $("#elPaso-event").removeClass("active");
    $("#houston-event").removeClass("active");
    $("#austin-event").removeClass("active");
  });

});
