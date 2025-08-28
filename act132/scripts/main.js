console.log("Hello, World!");

function varScoping() {
  var x = 1;

  if (true) {
    var x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}

function letScoping() {
  let x = 1;

  if (true) {
    let x = 2;
    console.log(x); // will print 2
  }
  // else{
  //   let x = 3;
  //   console.log(x); // will print 3
  // }

  console.log(x); // will print 1
}

function greet(name) {
  return "Hola " + name + "!";
}

function calculateHypotenuseWithHypot(sideA, sideB) {
  return Math.hypot(sideA, sideB);
}

// Example usage:
const side1 = 3;
const side2 = 4;
const hypotenuse = calculateHypotenuseWithHypot(side1, side2);
console.log(`The hypotenuse is: ${hypotenuse}`); // Output: The hypotenuse is: 5

let message = greet("Juan"); // Calling the function
console.log(message); // Output: Hello, Alice!

document.writeln("<h3>" + message + "</h3>");

const timestamp = Date.now();
message = "Hoy es timestamp: "+timestamp;
document.writeln("<p>" + message + "</p>");


function getData(form) {
  var formData = new FormData(form);

  for (var pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }

  console.log(Object.fromEntries(formData));
  console.log(JSON.stringify(Object.fromEntries(formData), null, 4));
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  getData(e.target);
});
