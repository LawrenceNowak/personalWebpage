const numbers = document.querySelectorAll(".calculatorNumber");

for(var i=0; i<numbers.length; i++) {
  numbers[i].addEventListener("click", showNumbers);
}

function showNumbers(e){
 console.log(e.target.id);
}