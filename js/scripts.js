
window.onload = function () {
  const form = document.querySelector("form#radio-form");

function add(number1, number2) {
  let number3 = number1 + number2;
  return number3;
}

function subtract(number1, number2) {
  let number3 = number1 - number2;
  return number3;
}

function multiply(number1, number2) {
  let number3 = number1 * number2;
  return number3;
}

function divide(number1, number2) {
  let number3 = number1 / number2;
  return number3;
}


  form.addEventListener("submit", function() {
    event.preventDefault();
  
    const number1 = parseInt(document.getElementById("number1").value);
    const number2 = parseInt(document.getElementById("number2").value);
    const radioSelection = document.querySelector("input[name='operation']:checked").value;

    console.log(number1, number2, radioSelection);


    if (radioSelection === "Add") {  // check for operator
      result = add(number1, number2);
    } else if (radioSelection === "Subtract") {
      result = subtract(number1, number2);
    } else if (radioSelection === "Multiply") {
      result = multiply(number1, number2);
    } else if (radioSelection === "Divide") {
      result = divide(number1, number2);
    }
    console.log(result);
   document.getElementById("output").innerText = result;
  });


};