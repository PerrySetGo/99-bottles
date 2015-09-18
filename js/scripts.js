
var bottleCount = function(number) {
  if (number == 0) {
    return finalLyrics();
  } else {
    return repeatedLyrics(number) + bottlesOfBeer(number-1);
  }
}


$(document).ready(function() {
    $("form#bottleCount").submit(function(event) {
    $(".lyrics").empty();
    var mainInput = $("input#mainInput").val(); //add functionality to handle null values
    var songText = bottleCount(mainInput);

    $(".lyrics").append(songText);

    $("#result").show();
    event.preventDefault();
  });
});

