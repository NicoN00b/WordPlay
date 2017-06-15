
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator)
}

$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    //var sentence = stringToSplit.split(separator)
    var stringSentence = $("input#sentence").val();
    var space = ' ';

    splitString(stringSentence, space);

    var newStrings = arrayOfStrings.map(function(string){
      return string
    });

    debugger;
    $("#sentence").text(sentenceInput);


    $("#story").show();

    event.preventDefault();
  });
});
