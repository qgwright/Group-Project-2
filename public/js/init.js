// Home page range-slider 

$(document).ready(function() {

  function updateCalorieTotal() {

    $("#range-slide-calories").on("click", function() {

      var calorieTotal = $(this.value);

      $("#total-calories-day").val(calorieTotal.selector);
      
    });

  }

  updateCalorieTotal(); 

});

// Home page meal-slider 

$(document).ready(function() {

  function updateMealTotal() {

    $("#range-slide-meals").on("click", function() {

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

    $("#food-1, #food-2, #food-3").keypress(function() {
      
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


  $("#submit-button").on("click", function() {
    var cals = parseInt($("#total-calories-day").val().trim());
    var meals = parseInt($("#total-meals-day").val());

    $.ajax({
      url: "api/homepage/submit",
      type: "POST",
      data: {
        callo: cals,
        numMeals: meals
      }
    }).done(function(data) {
      console.log(data);
    });

  });

  // Kevin's stuff
  $("#autocomplete-input-1").on("keyup", function () {

    var self = $(this);
    console.log(self.val().trim());
    
    $.ajax({
      url: "api/autocomplete",
      type: "POST",
      data: {
        food: $(this).val().trim()
      }
    })
    .done(function(response) {

      var foodSource = [];
      for(var i = 0; i < response.length; i++) {
        foodSource.push(response[i].food_name);
      }

      console.log(foodSource);

      self.autocomplete({
        source: foodSource
      });
  
    });
  });

  // $(document).on("click", "p.food", function() {
  //   var food = $(this).attr("data-name");
  //   var settings = {
  //     "async": true,
  //     "url": "https://trackapi.nutritionix.com/v2/natural/nutrients",
  //     "method": "POST",
  //     "headers": {
  //       "x-app-id": process.env.APP_ID,
  //       "x-app-key": process.env.APP_KEY,
  //       "x-remote-user-id": "0",
  //       "Content-Type": "application/json"
  //     },
  //     "data": JSON.stringify({
  //       query: food,
  //       num_servings: 1,
  //       locale: "en_US"
  //     })
  //   }

  //   $.ajax(settings).done(function (response) {
  //     console.log(response.foods[0]);
  //     $("[data-name='" + food + "']").append("<p> (" + response.foods[0].nf_calories + " cal) </p>");
  //   });
  // });

});

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

