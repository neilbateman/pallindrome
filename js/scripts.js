function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

$(document).ready(function(){
  $("form#word").submit(function(event){
    event.preventDefault();
    var word = $("input#word").val();
    var reversed = reverseString(word)


    if (word === reversed) {
      var result = "It is a pallindrome!";
    } else {
      var result = "Try a different word";
    }
    $('#response').text(result);
  });
});
