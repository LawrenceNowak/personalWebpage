/* searchin for all classes that have the class calulatorNumber */
const characters = document.querySelectorAll(".calculatorCharacter");

/* Looping through the amount of classes found with the querySelectorAll method and then printing out the 6th string when clicking on the button*/
for(var i=0; i<characters.length; i++) {
  characters[i].addEventListener("click", inputCharacter);
}

//####################### OLD FUNCTION########################################
// function showCharacter(uniqueIDButton){
//     /* set the id's of the pressed buttons to the const stringID */
//     const stringID = uniqueIDButton.target.id;

//     /* Splitting of the last strings of the id's number1, to number9, so that the id number1 becomes only the string 1*/
//     const splitStringID = stringID.split("");
// }

function inputCharacter(buttonValueParamter){
  // If the event does not get explicitly handled, its default action should not be taken as it normally would be --MDN
  buttonValueParamter.preventDefault();

  // looking up all the looped buttons values and setting it to the const buttonValue
  const buttonValue = buttonValueParamter.target.value;

  // input the looped buttons values into the text field
  document.getElementById("calculatorInputField").value = buttonValue;
  console.log(buttonValue);
}