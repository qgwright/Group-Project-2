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

$(document).ready(function() {

  function updateTotal() {

    $("#range-slide").on("click", function() {

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
      
      $("#over-under").val(range-foods);
    } 
   
  }

  updateTotal();

});

/// Meal Page Mobile Row

$(document).ready(function() {

  function updateTotalMobile() {

    $("#range-slide").on("click", function() {

      var currentTotal = $(this.value);

      $("#total-calories-meal-mobile").val(currentTotal.selector);
      
    });

    $("#food-1, #food-2, #food-3").keypress(function() {
      
      var food1Total = $("#food-1").val() *1;
      var food2Total = $("#food-2").val() * 1;
      var food3Total = $("#food-3").val() *1;

      var foods = food1Total + food2Total + food3Total;

      $("#current-meal-mobile").val(foods);

      overUnder(foods);

    });

    function overUnder(foods) {

      var range = $("#total-calories-meal-mobile").val();
      var foods = foods;
      
      $("#over-under-mobile").val(range-foods);
    } 
   
  }

  updateTotalMobile();

});


////////////////////////////////////////////////////////////////
// MATERIALIZE STUFF
////////////////////////////////////////////////////////////////

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


$(document).ready(function() {
  M.updateTextFields();
});

// Or with jQuery

$(document).ready(function(){
  $('select').formSelect();
});

// Or with jQuery

$(document).ready(function(){
  $('input.autocomplete').autocomplete({
    data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
  });
});

