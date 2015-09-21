var bottleCount = function(mainInput) {
  if (mainInput === 0 ) {
    return finalLyrics();
  } else if (mainInput === 1) {
    return lastButOneLyrics(mainInput) + bottleCount(mainInput-1);
  }
  else {
    return repeatedLyrics(mainInput) + bottleCount(mainInput-1);
  }
}

var glassIcon ="<span class='glyphicon glyphicon-glass'></span>"
var repeatedLyrics = function(mainInput) {
  var nextBottle = mainInput - 1;
  return "<br>" + mainInput + " bottles of beer on the wall, " + mainInput + " bottles of beer. Take one down and pass it around, " + nextBottle + " bottles of beer on the wall. </br>";
}

var lastButOneLyrics = function(mainInput) {
  var nextBottle = mainInput - 1;
  return "<br>" + mainInput + " bottle of beer on the wall, " + mainInput + " bottle of beer. Take one down and pass it around, " + nextBottle + " bottles of beer on the wall. </br>";
}

var finalLyrics = function() {
  return "<br> No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.</br>"
}


$(document).ready(function() {
  $("form#bottleCount").submit(function(event) {
    var mainInput = parseInt($("input#mainInput").val());
    var songLyrics = bottleCount(mainInput);

    $("#input").text(mainInput);
    $("#songLyrics").html(songLyrics);

    $(".result").show();
    $(".input").hide();
    $(".goAgain").show();
    event.preventDefault();
  });

  $("form#bottleCountAgain").submit(function(event) {
    var mainInput = parseInt($("input#mainInputAgain").val());
    var songLyrics = bottleCount(mainInput);

    $("#input").text(mainInput);
    $("#songLyrics").html(songLyrics);

    $(".result").show();
    $(".input").hide();
    $(".goAgain").show();
    event.preventDefault();
  });
});
