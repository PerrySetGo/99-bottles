






var bottleCount = function(mainInput){

debugger; 
var newBottleCount = mainInput; 
var htmlString = "";

while ( newBottleCount > 0)
  {
    //htmlString = newBottleCount + "bottles of beer on the wall";
    htmlString = newBottleCount + "bottles of beer on the wall," + newBottleCount + "bottles of beer. Take it down and pass it around, " + newBottleCount + "bottles of beer on the wall.";
    console.log("newBottleCount1"+newBottleCount); 
    newBottleCount--; 
    console.log("newBottleCount2"+newBottleCount);
  return newBottleCount; 
  }
}; 

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

