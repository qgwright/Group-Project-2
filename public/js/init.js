////////////////////////////////////////////////////////////////
// Richard's STUFF
////////////////////////////////////////////////////////////////

/// Desktop Sidebar

$(document).ready(function() {

  function updateTotal() {

    $("#range-slide").on("click", function() {

      var currentTotal = $(this.value);

      $("#total-calories-meal").val(currentTotal.selector);
      
    });

    $("#food-1, #food-2, #food-3").keypress(function() {
      
      var food1Total = $("#food-1").val() *1;
      var food2Total = $("#food-2").val() * 1;
      var food3Total = $("#food-3").val() *1;

      var foods = food1Total + food2Total + food3Total;

      $("#current-meal").val(foods);

      overUnder(foods);

    });

    function overUnder(foods) {

      var range = $("#total-calories-meal").val();
      var foods = foods;
      
      $("#over-under").val(range-foods);
    } 

    // Kevin's stuff
    $(".autocomplete").on("keyup", function() {

      console.log($(this).val().trim());
      /*
      $.ajax({
        url: "api/autocomplete",
        type: "POST",
        data: {
          food: $(this).val().trim()
        }
      })
      .done(function(response) {
        console.log(response);
        // $exampleList.empty();
        // for(var i = 0; i < response.length; i++) {
        //   var food = response[i];
        //   $exampleList.append("<p class=\"food\" data-name=" + food.food_name + "\">" + food.food_name + "</p>");
        //   $exampleList.append("<img src=\"" + food.photo.thumb + "\" width=100 height=100>");
        // }
    
        var foodSource = [];
        for(var i = 0; i < response.length; i++) {
          foodSource.push(response[i].food_name);
        }
    
        $(this).autocomplete({
          source: foodSource
        });
    
      });
      */
    
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
   
  }

  updateTotal();

});

/// Mobile Row

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

