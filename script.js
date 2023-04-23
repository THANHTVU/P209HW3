// get reference to 2nd button element


let origArray = [2, 3, 4];
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");

// Function to write the values of origArray into the 3 textboxes
function writeValues() {
  document.getElementById("numb1").value = origArray[0];
  document.getElementById("numb2").value = origArray[1];
  document.getElementById("numb3").value = origArray[2];
}

// Add event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  writeValues();

  // Add click event listener to btn2 using anonymous function
  btn2.addEventListener("click", function () {
    let newArray = origArray.map((val) => val ** 3);
    document.getElementById("numb1").value = newArray[0];
    document.getElementById("numb2").value = newArray[1];
    document.getElementById("numb3").value = newArray[2];
  });

  // Add click event listener to btn3 calling a named function
  btn3.addEventListener("click", fourthPower);
});

// Function to calculate the square of values in origArray
function square() {
  let newArray = origArray.map((val) => val ** 2);
  document.getElementById("numb1").value = newArray[0];
  document.getElementById("numb2").value = newArray[1];
  document.getElementById("numb3").value = newArray[2];
}

// Function to calculate the 4th power of values in origArray
function fourthPower() {
  let newArray = origArray.map((val) => val ** 4);
  document.getElementById("numb1").value = newArray[0];
  document.getElementById("numb2").value = newArray[1];
  document.getElementById("numb3").value = newArray[2];
}