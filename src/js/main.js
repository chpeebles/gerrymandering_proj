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
    $("#houston-sect").hide();
    $("#sanAntonio-sect").hide();

    $("#austin-event").addClass("active");
    $("#dallas-event").removeClass("active");
    $("#houston-event").removeClass("active");
    $("#sanAntonio-event").removeClass("active");
  });

  $("#dallas-event").on( "click", function () {
    $("#dallas-sect").show();
    $("#austin-sect").hide();
    $("#houston-sect").hide();
    $("#sanAntonio-sect").hide();

    $("#dallas-event").addClass("active");
    $("#austin-event").removeClass("active");
    $("#houston-event").removeClass("active");
    $("#sanAntonio-event").removeClass("active");
  });

  $("#houston-event").on( "click", function () {
    $("#houston-sect").show();
    $("#dallas-sect").hide();
    $("#austin-sect").hide();
    $("#sanAntonio-sect").hide();

    $("#houston-event").addClass("active");
    $("#dallas-event").removeClass("active");
    $("#austin-event").removeClass("active");
    $("#sanAntonio-event").removeClass("active");
  });

  $("#sanAntonio-event").on( "click", function () {
    $("#sanAntonio-sect").show();
    $("#dallas-sect").hide();
    $("#houston-sect").hide();
    $("#austin-sect").hide();

    $("#sanAntonio-event").addClass("active");
    $("#dallas-event").removeClass("active");
    $("#houston-event").removeClass("active");
    $("#austin-event").removeClass("active");
  });

});

// QUIZ JAVASCRIPT //

let allQuestions = [
  "McAllen, TX and Seguin, TX are in the same congressional district.",
  "The University of Texas at Austin and the Pluckers Wing Bar on Rio Grande Street are in the same congressional district.",
  "Rice University and Lake Houston in Houston, TX are in different congressional districts.",
  "Baylor University and Texas A&M University sit in the same congressional district.",
  "The Texas Package Stores Association (TPSA) Building and Texas State Capitol are in different congressional districts.",
  "The UT Intramural Fields in Austin, TX and Katy, TX are in different districts.",
  "Fort Worth, TX and Meacham International Airport (FTW) are in the same district, but North Richland Hills (Green) is not.",
  "The AT&T Center in San Antonio, TX and Austin-Bergstrom International Airport in Austin, TX are in the same congressional district."
];

let allImages = [
  '<img class="card-img-top" src="img/quizImages/Q1_Question.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q2_Question.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q3_Question.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q4_Question.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q5_Question.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q6_Question.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q7_Question.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q8_Question.png" alt="">'
];

let allAnswerImages = [
  '<img class="card-img-top" src="img/quizImages/Q1_Answers.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q2_Answers.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q3_Answers.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q4_Answers.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q5_Answers.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q6_Answers.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q7_Answers.png" alt="">',
  '<img class="card-img-top" src="img/quizImages/Q8_Answers.png" alt="">'
];

let allAnswerBlurbs = [
  "<b>TRUE!</b> Despite being separated by over 250 miles (or almost 4 hours in Texas terms), McAllen and Seguin are both in TX-15.",
  "<b>FALSE!</b> That Pluckers Wing Bar is in TX-21 (represented by Republican Chip Roy), while UT Austin is in TX-25 (represented by Republican Roger Williams).",
  "<b>FALSE!</b> Because of the extraordinarily weird shape of TX-2, these two locations on the opposite sides of Houston are both represented by Republican Dan Crenshaw!",
  "<b>TRUE!</b> Thanks to the enormous size of TX-17, both the Bears and Aggies vote in the same district!",
  "<b>TRUE!</b> Despite literally being a 4 minute walk from the Capitol Building, both buildings are in separate districts (TPSA in TX-21 and the Capitol in TX-25).",
  "<b>FALSE!</b> Thanks to the very odd shape of the 10th Congressional district (represented by Republican Michael McCaul), these two seemingly unrelated locations (that are separated by nearly 150 miles no less!) are in the same district.",
  "<b>FALSE!</b> Because of the weird shapes of TX-12 and TX-33, Meacham International Airport (FTW) is in a separate district from North Richland Hills and Fort Worth despite being closer to Fort Worth.",
  "<b>TRUE!</b> Because of the unusual shape of TX-35, these two seemingly unrelated locations (which are separated by nearly 80 miles!) are in the same district!"
];

let allCorrectAnswers = [
  "true",
  "false",
  "false",
  "true",
  "true",
  "false",
  "false",
  "true"
];

// initiate empty arrays to populate with 4 random ones
let questions = [];
let answerBlurbs = [];
let correctAnswers = [];
let quizImages = [];
let quizAnswerImages = [];
let i;

// generate 3 random, different questions
for (i = 0; i < 3; i++) {
  var rand_indx = Math.trunc (Math.random() * 8);

  // check if question has already been added
  while ( questions.includes(allQuestions[rand_indx]) ){
    var rand_indx = Math.trunc (Math.random() * 8);
  }

  questions.push( allQuestions[rand_indx] );
  answerBlurbs.push( allAnswerBlurbs[rand_indx] );
  correctAnswers.push( allCorrectAnswers[rand_indx] );
  quizImages.push( allImages[rand_indx] );
  quizAnswerImages.push( allAnswerImages[rand_indx] );
}

// populate page with random questions
document.getElementById("q1").innerHTML = questions[0];
document.getElementById("q1-img").innerHTML = quizImages[0];
document.getElementById("q2").innerHTML = questions[1];
document.getElementById("q2-img").innerHTML = quizImages[1];
document.getElementById("q3").innerHTML = questions[2];
document.getElementById("q3-img").innerHTML = quizImages[2];

// on submit, return a list of all the answers
function getValues() {
  var one = $('input[name="q1"]:checked').val();
  var two = $('input[name="q2"]:checked').val()
  var three = $('input[name="q3"]:checked').val()

  // putting answers in an array
  return [one, two, three];
};

// check if any of the answers are not completed
function checkNull(answers) {
  for (i = 0; i < answers.length; i++) {
    if (answers[i] == null) {
      alert("Please supply an answer for question " + (i + 1));
      return true;
    }
  };
};

// grade the quiz
function gradeQuiz() {
  var answers = getValues()
  var numCorrect = 0;

  // if all answers are completed
  if (!checkNull(answers)) {

    for (i = 0; i < answers.length; i++) {
      // check if answers[i] == correctAnswers[i]
      if (answers[i] == correctAnswers[i]) {
        numCorrect++;
      }

      if (i == 2) {
        document.getElementById("q1-answer").innerHTML = answerBlurbs[0];
        document.getElementById("q1-img").innerHTML = quizAnswerImages[0];
        document.getElementById("q2-answer").innerHTML = answerBlurbs[1];
        document.getElementById("q2-img").innerHTML = quizAnswerImages[1];
        document.getElementById("q3-answer").innerHTML = answerBlurbs[2];
        document.getElementById("q3-img").innerHTML = quizAnswerImages[2];
        $(".quiz-answer").show();

        alert("Congrats! You got " + numCorrect + "/3 correct.");
      }
    }
  }
}; 
