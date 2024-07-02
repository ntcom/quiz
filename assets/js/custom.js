// next prev
var divs = $(".show-section section");
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first

//show active step
function showActiveStep() {
  if ($("#step1").is(":visible")) {
    $(".step-bar .bar .fill").eq(now).addClass("w-100");
    $("#activeStep").html("1");
  } else if ($("#step2").is(":visible")) {
    $(".step-bar .bar .fill").eq(now).addClass("w-100");
    $("#activeStep").html("2");
  } else if ($("#step3").is(":visible")) {
    $(".step-bar .bar .fill").eq(now).addClass("w-100");
    $("#activeStep").html("3");
  } else if ($("#step4").is(":visible")) {
    $(".step-bar .bar .fill").eq(now).addClass("w-100");
    $("#activeStep").html("4");
  } else if ($("#step5").is(":visible")) {
    $(".step-bar .bar .fill").eq(now).addClass("w-100");
    $("#activeStep").html("5");
  } 
//   else if ($("#step6").is(":visible")) {
//     $(".step-bar .bar .fill").eq(now).addClass("w-100");
//     $("#activeStep").html("6");
//   } else if ($("#step7").is(":visible")) {
//     $(".step-bar .bar .fill").eq(now).addClass("w-100");
//     $("#activeStep").html("7");
//   } else if ($("#step8").is(":visible")) {
//     $(".step-bar .bar .fill").eq(now).addClass("w-100");
//     $("#activeStep").html("8");
//   } else if ($("#step9").is(":visible")) {
//     $(".step-bar .bar .fill").eq(now).addClass("w-100");
//     $("#activeStep").html("9");
//   } 
  else if ($("#step10").is(":visible")) {
    $(".step-bar .bar .fill").eq(now).addClass("w-100");
    $("#activeStep").html("10");
  } else {
    console.log("error");
  }
}

function next() {
  divs.eq(now).hide();
  now = now + 1 < divs.length ? now + 1 : 0;
  divs.eq(now).show(); // show next
  console.log(now);

  showActiveStep();
}
$(".prev").on("click", function () {
  $(".radio-field").addClass("bounce-left");
  $(".radio-field").removeClass("bounce-right");
  $(".step-bar .bar .fill").eq(now).removeClass("w-100");
  divs.eq(now).hide();
  now = now > 0 ? now - 1 : divs.length - 1;
  divs.eq(now).show(); // show previous
  console.log(now);

  showActiveStep();
});

// quiz validation
var checkedradio = false;

function radiovalidate(stepnumber) {
  var checkradio = $("#step" + stepnumber + " input")
    .map(function () {
      if ($(this).is(":checked")) {
        return true;
      } else {
        return false;
      }
    })
    .get();

  checkedradio = checkradio.some(Boolean);
}

// form validation
$(document).ready(function () {
  // check step1
  $("#step1btn").on("click", function () {
    radiovalidate(1);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
        )
      );

      radiovalidate(1);
    } else {
      $("#step1 .radio-field").removeClass("bounce-left");
      $("#step1 .radio-field").addClass("bounce-right");
      setTimeout(function () {
        next();
      }, 900);

      countresult(1);
    }
  });

  // check step2
  $("#step2btn").on("click", function () {
    radiovalidate(2);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
        )
      );

      radiovalidate(2);
    } else {
      $("#step2 .radio-field").removeClass("bounce-left");
      $("#step2 .radio-field").addClass("bounce-right");
      setTimeout(function () {
        next();
      }, 900);

      countresult(2);
    }
  });

  // check step3
  $("#step3btn").on("click", function () {
    radiovalidate(3);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
        )
      );

      radiovalidate(3);
    } else {
      $("#step3 .radio-field").removeClass("bounce-left");
      $("#step3 .radio-field").addClass("bounce-right");
      setTimeout(function () {
        next();
      }, 900);

      countresult(3);
    }
  });

  // check step4
  $("#step4btn").on("click", function () {
    radiovalidate(4);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
        )
      );

      radiovalidate(4);
    } else {
      $("#step4 .radio-field").removeClass("bounce-left");
      $("#step4 .radio-field").addClass("bounce-right");
      setTimeout(function () {
        next();
      }, 900);

      countresult(4);
    }
  });

  // check step5
  $("#step5btn").on("click", function () {
    radiovalidate(5);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
        )
      );

      radiovalidate(5);
    } else {
      $("#step4 .radio-field").removeClass("bounce-left");
      $("#step4 .radio-field").addClass("bounce-right");
      setTimeout(function () {
        next();
      }, 900);

      countresult(5);
    }
  });
  // check step6
//   $("#step6btn").on("click", function () {
//     radiovalidate(6);

//     if (checkedradio == false) {
//       (function (el) {
//         setTimeout(function () {
//           el.children().remove(".reveal");
//         }, 3000);
//       })(
//         $("#error").append(
//           '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
//         )
//       );

//       radiovalidate(6);
//     } else {
//       $("#step4 .radio-field").removeClass("bounce-left");
//       $("#step4 .radio-field").addClass("bounce-right");
//       setTimeout(function () {
//         next();
//       }, 900);

//       countresult(6);
//     }
//   });
//   // check step7
//   $("#step7btn").on("click", function () {
//     radiovalidate(7);

//     if (checkedradio == false) {
//       (function (el) {
//         setTimeout(function () {
//           el.children().remove(".reveal");
//         }, 3000);
//       })(
//         $("#error").append(
//           '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
//         )
//       );

//       radiovalidate(7);
//     } else {
//       $("#step4 .radio-field").removeClass("bounce-left");
//       $("#step4 .radio-field").addClass("bounce-right");
//       setTimeout(function () {
//         next();
//       }, 900);

//       countresult(7);
//     }
//   });
//   // check step8
//   $("#step8btn").on("click", function () {
//     radiovalidate(8);

//     if (checkedradio == false) {
//       (function (el) {
//         setTimeout(function () {
//           el.children().remove(".reveal");
//         }, 3000);
//       })(
//         $("#error").append(
//           '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
//         )
//       );

//       radiovalidate(8);
//     } else {
//       $("#step4 .radio-field").removeClass("bounce-left");
//       $("#step4 .radio-field").addClass("bounce-right");
//       setTimeout(function () {
//         next();
//       }, 900);

//       countresult(8);
//     }
//   });
//   // check step9
//   $("#step9btn").on("click", function () {
//     radiovalidate(9);

//     if (checkedradio == false) {
//       (function (el) {
//         setTimeout(function () {
//           el.children().remove(".reveal");
//         }, 3000);
//       })(
//         $("#error").append(
//           '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
//         )
//       );

//       radiovalidate(9);
//     } else {
//       $("#step4 .radio-field").removeClass("bounce-left");
//       $("#step4 .radio-field").addClass("bounce-right");
//       setTimeout(function () {
//         next();
//       }, 900);

//       countresult(9);
//     }
//   });

  // check last step
  $("#sub").on("click", function () {
    radiovalidate(10);

    if (checkedradio == false) {
      (function (el) {
        setTimeout(function () {
          el.children().remove(".reveal");
        }, 3000);
      })(
        $("#error").append(
          '<div class="reveal alert alert-danger">Chọn đáp án!</div>'
        )
      );

      radiovalidate(10);
    } else {
      countresult(10);
      showresult();
      $("#sub").html("done");
    }
  });
});
