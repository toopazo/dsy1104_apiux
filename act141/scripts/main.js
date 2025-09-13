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
  console.log(form);
  var formData = new FormData(form);

  for (var pair of formData.entries()) {
    console.log("llave " + pair[0] + " valor " + pair[1]);
  }

  console.log(Object.fromEntries(formData)["name"]);
  console.log(JSON.stringify(Object.fromEntries(formData), null, 2));

  // Borrar mensaje previo (si existe)
  if (document.getElementById("msg") != null){
    document.getElementById("msg").innerHTML = "";
  }
  // Escribir nuevo mensaje
  msg = "<p id='msg'>Formulario enviado con éxito</p>"
  document.getElementById("myForm").innerHTML += msg;

  // var edad = func_leer_edad(Object.fromEntries(formData))
  // mensaje = func_get_msg(edad)
  // func_escribir_msg(msg)
}

document.getElementById("myForm").addEventListener("submit", function (e) {
  console.log(e);
  e.preventDefault();
  getData(e.target);
});

function showAlert() {
    // This function will be executed when the button is clicked
    console.log("Button was clicked!");
    // console.log(document.getElementById("myForm"))
    // var formData = new FormData(document.getElementById("myForm").FormData());
  }
