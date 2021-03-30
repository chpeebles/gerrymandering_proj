'use strict';

// populate copyright in footer with current year
const copyrightYear = document.querySelector('.copyright-year');
const now = new Date();
copyrightYear.innerHTML = now.getFullYear();

// home page on click of what, why, how, hide the current active one
jQuery(function() { 
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

});
