console.log("Hello, World!");

// Assuming an HTML input field with id="userInput"
// let userInputElement = document.getElementById("exampleInputEmail1");
// let userVariable = userInputElement.value; // Retrieves the current value of the input field
// console.log("userVariable" + userVariable);
// console.log(userVariable);


const form = document.getElementById('myForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        const formData = new FormData(form);

        // Convert FormData to a plain object (for easier handling)
        const data = Object.fromEntries(formData.entries());
        console.log(data); // Contains all name-value pairs from the form
    });
