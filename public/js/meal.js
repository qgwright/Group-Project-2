$exampleText.on("keyup", function() {

  $.ajax({
    url: "api/autocomplete",
    type: "POST",
    data: {
      food: $exampleText.val().trim()
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

    $("#example-text").autocomplete({
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