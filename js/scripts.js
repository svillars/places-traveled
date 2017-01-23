//business logic
function Places(landmark, location, time) {
  this.landmarkName = landmark;
  this.locationName = location;
  this.timeOfYear = time;
}

Places.prototype.info = function() {
  return this.landmarkName + " - " + this.locationName;
}

// user interface logic
$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputLandmark = $("input#new-landmark").val();
    var inputLocation = $("input#new-location").val();
    var inputTime = $("input#new-time").val();

    var newPlace = new Places(inputLandmark, inputLocation, inputTime);

    $("ul#places").append("<li><span class='place'>" + newPlace.info() + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();
      $("#show-place h2").text(newPlace.landmarkName);
      $(".landmark").text(newPlace.landmarkName);
      $(".location").text(newPlace.locationName);
      $(".time").text(newPlace.timeOfYear);
    });

    $("input#new-landmark").val("");
    $("input#new-location").val("");
    $("input#new-time").val("");

  })
})
