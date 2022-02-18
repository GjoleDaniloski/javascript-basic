console.log("------- HOMEWORK PART 1 -------");

$(document).ready(function() {

// let allElement = $("*");
// console.log(allElement);

let textInput = $("#textInput");
// let button = $("button");
let outputMessage = $("#outputMessage");
let btn = $("#btn");
btn.click(function() { 
    textInput.val().html = outputMessage.val();
  }); 

// btn.click(function( textInput ) {
//     return "hey";
//   });
//   btn.click(function( textInput ) {
//     $(outputMessage).html( textInput.result );

});


