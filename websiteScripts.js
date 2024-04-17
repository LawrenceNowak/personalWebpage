/* searchin for all classes that have the class calulatorNumber */
const characters = document.querySelectorAll(".calculatorCharacter");

/* Looping through the amount of classes found with the querySelectorAll method and then printing out the 6th string when clicking on the button*/
for(var i=0; i<characters.length; i++) {
  characters[i].addEventListener("click", showCharacter);
}

function showCharacter(uniqueIDButton){
    /* set the id's of the pressed buttons to the const stringID */
    const stringID = uniqueIDButton.target.id;

    /* Splitting of the last strings of the id's number1, to number9, so that the id number1 becomes only the string 1*/
    const splitStringID = stringID.split("");
    
    var x = document.getElementById("calculatorInputField");
    x.setAttribute(localName, splitStringID[9]);
}