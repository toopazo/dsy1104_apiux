console.log("Hello, World!");

console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);
console.log(window.location.search);
console.log("Verificando comparaciones con null y undefined");
console.log(sessionStorage.getItem("llave") == null);
console.log(sessionStorage.getItem("llave") == undefined);
if (sessionStorage.getItem("llave") == null) {
  console.log("No existe la llave");

  // Save data to sessionStorage
  sessionStorage.setItem("llave", "valor");
}
else {
  console.log("Ya existe la llave");
}

// Get saved data from sessionStorage
let data = sessionStorage.getItem("llave");

console.log(sessionStorage); // null
console.log(sessionStorage.getItem("llave")); // null

// http://127.0.1.1:8083/act141/after/?validationCustom01=Mark&validationCustom02=Otto&validationCustomUsername=asd&validationCustom03=qwe&validationCustom04=...&validationCustom05=123
const params = new URLSearchParams(window.location.search);
const userValidation01 = params.get('validationCustom01');
const userValidation02 = params.get('validationCustom02');
const userValidationUsername = params.get('validationCustomUsername');
const userValidation03 = params.get('validationCustom03');
const userValidation04 = params.get('validationCustom04');
const userValidation05 = params.get('validationCustom05');
console.log(userValidation01);
console.log(userValidation02);
console.log(userValidationUsername);
console.log(userValidation03);
console.log(userValidation04);
console.log(userValidation05);

// Remove saved data from sessionStorage
// sessionStorage.removeItem("llave");

// // Remove all saved data from sessionStorage
// sessionStorage.clear();