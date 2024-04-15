/* searchin for all classes that have the class calulatorNumber */
const numbers = document.querySelectorAll(".calculatorNumber");

/* Looping through the amount of classes found with the querySelectorAll method and then printing out the 6th string when clicking on the button*/
for(var i=0; i<numbers.length; i++) {
  numbers[i].addEventListener("click", showNumber);
}


function showNumber(uniqueIDButton){
    /* set the id's of the pressed buttons to the const stringID */
    const stringID = uniqueIDButton.target.id;

    /* Splitting of the last strings of the id's number1, to number9, so that the id number1 becomes only the string 1*/
    const splitStringID = stringID.split("");
    console.log(splitStringID[6]);
}