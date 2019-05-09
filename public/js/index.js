// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    description: $exampleDescription.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  API.saveExample(example).then(function() {
    refreshExamples();
  });

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

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
