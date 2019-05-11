// Home page range-slider 

$(document).ready(function () {

  function updateCalorieTotal() {

    $("#range-slide-calories").on("click", function () {

      var calorieTotal = $(this.value);

      $("#total-calories-day").val(calorieTotal.selector);

    });

  }

  updateCalorieTotal();

});

// Home page meal-slider 

$(document).ready(function () {

  function updateMealTotal() {

    $("#range-slide-meals").on("click", function () {

      var mealTotal = $(this.value);

      $("#total-meals-day").val(mealTotal.selector);

    });

  }

  updateMealTotal();

});


////////////////////////////////////
/// Home Page Submit Button
////////////////////////////////////

$(document).ready(function () {

  $('select').formSelect();

});

////////////////////////////////////



/// Meal Page Desktop Sidebar

$(document).ready(function () {

  function updateTotal() {

    $("#range-slide").on("click", function () {

      var currentTotal = $(this.value);

      $("#total-calories-meal").val(currentTotal.selector);

    });

    $("#food-1, #food-2, #food-3").keypress(function () {

      var food1Total = $("#food-1").val() * 1;
      var food2Total = $("#food-2").val() * 1;
      var food3Total = $("#food-3").val() * 1;

      var foods = food1Total + food2Total + food3Total;

      $("#current-meal").val(foods);

      overUnder(foods);

    });

    function overUnder(foods) {

      var range = $("#total-calories-meal").val();
      var foods = foods;

      $("#over-under").val(range - foods);
    }
  }

  updateTotal();


  $("#submit-button").on("click", function () {
    var cals = parseInt($("#total-calories-day").val().trim());
    var meals = parseInt($("#total-meals-day").val());

    $.ajax({
      url: "api/homepage/submit",
      type: "POST",
      data: {
        callo: cals,
        numMeals: meals
      }
    }).done(function (data) {
      console.log(data);
    });

  });

  var autocompleteNumber;

  // Kevin's stuff
  $("#autocomplete-input-1, #autocomplete-input-2, #autocomplete-input-3").on("keyup", function () {

    var self = $(this);
    autocompleteNumber = self[0].id.charAt(self[0].id.length - 1);

    $.ajax({
      url: "api/autocomplete",
      type: "POST",
      data: {
        food: $(this).val().trim()
      }
    })
      .done(function (response) {

        var foodSource = {};
        for (var i = 0; i < response.length; i++) {
          foodSource[response[i].food_name] = response[i].photo.thumb;
        }

        self.autocomplete({
          data: foodSource
        });

      });
  });

  $(document).on("click", "span.highlight", function () {
    var self = $(this);

    var food = self.text();

    $.ajax({
      url: "api/nutrients",
      type: "POST",
      data: {
        food: food
      }
    })
      .done(function (response) {

        var food = response[0];
        console.log(food);
        var cals = Math.round(food.nf_calories);
        var chol = Math.round(food.nf_cholesterol);
        var satfats = Math.round(food.nf_saturated_fat);
        var protein = Math.round(food.nf_protein);
        var fiber = Math.round(food.nf_dietary_fiber);
        var photo = food.photo.highres;

        $("#food-" + autocompleteNumber).val(cals);
        $("#food-" + autocompleteNumber + "-cals").text(cals);
        $("#food-" + autocompleteNumber + "-chol").text(chol);
        $("#food-" + autocompleteNumber + "-sf").text(satfats);
        $("#food-" + autocompleteNumber + "-pro").text(protein);
        $("#food-" + autocompleteNumber + "-fib").text(fiber);

        var picSelector = "img[id='food-pic-" + autocompleteNumber + "']";
        $(picSelector)[0].src = photo;

      });

  });

  
  $(".autocomplete").change(function () {
    console.log("changed");
    console.log($("#food-1-cals").text());
    console.log($("#food-2-cals").text());
    console.log($("#food-3-cals").text());
    var totalCals = parseInt($("#food-1-cals").text()) + parseInt($("#food-2-cals").text()) + parseInt($("#food-3-cals").text());
    console.log(totalCals);
    console.log($("#current-meal"));
  });

});

var f = 

/// Meal Page Mobile Row

$(document).ready(function () {

  function updateTotalMobile() {

    $("#range-slide").on("click", function () {

      var currentTotal = $(this.value);

      $("#total-calories-meal-mobile").val(currentTotal.selector);

    });

    $("#food-1, #food-2, #food-3").keypress(function () {

      var food1Total = $("#food-1").val() * 1;
      var food2Total = $("#food-2").val() * 1;
      var food3Total = $("#food-3").val() * 1;

      var foods = food1Total + food2Total + food3Total;

      $("#current-meal-mobile").val(foods);

      overUnder(foods);

    });

    function overUnder(foods) {

      var range = $("#total-calories-meal-mobile").val();
      var foods = foods;

      $("#over-under-mobile").val(range - foods);
    }

  }

  updateTotalMobile();

});


////////////////////////////////////////////////////////////////
// MATERIALIZE STUFF
////////////////////////////////////////////////////////////////

(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function () {
  M.updateTextFields();
});

// Or with jQuery

$(document).ready(function () {
  $('select').formSelect();
});

