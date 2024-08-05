var textArray = [
  "Hello I'm Fred1",
  "Hello I'm Jimmy1",
  "Hello I'm Terry1",
  "Hello I'm Fred2",
  "Hello I'm Jimmy2",
  "Hello I'm Terry2",
  "Hello I'm Fred3",
  "Hello I'm Jimmy3",
  "Hello I'm Terry3"
];
var randomNumber = Math.floor(Math.random() * textArray.length);
document.getElementById("randomNumber").innerHTML = textArray[randomNumber];
