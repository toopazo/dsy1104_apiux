// Example starter JavaScript for disabling form submissions if there are invalid fields

const map = new Map();

function check_passwd(){
    passw1 = user_data["passw1"];
    passw2 = user_data["passw2"];
    if (passw1 != passw2) {
        console.log("Las contraseñas no coinciden");
    }
}

function getData(form) {
    console.log("getData");
    console.log(form);

    var formData = new FormData(form);
    // for (var pair of formData.entries()) {
    //     console.log("llave " + pair[0] + " valor " + pair[1]);
    // }
    let user_data = Object.fromEntries(formData);
    console.log(user_data);

    // console.log(JSON.stringify(Object.fromEntries(formData), null, 2));

    // Borrar mensaje previo (si existe)
    //   if (document.getElementById("msg") != null){
    //     document.getElementById("msg").innerHTML = "";
    //   }

    // Escribir nuevo mensaje
    // <form action="http://localhost:8082/api/v1/orders" method="get" id="myForm2">
    // <!-- <form> -->
    //     <label>Name:<input id="name" name="name"></label>
    //     <label>Address:<input id="addr" name="address"></label>
    //     <!-- <label>Correo:<input id="correo" name="correo"></label> -->
    //     <input type="submit" value="Enviar">
    // </form>
    msg = "<p id='msg'>Formulario enviado con éxito</p>"
    document.getElementById("myForm2").innerHTML += msg;
    map.set("mascota1", {"nombre": "boby", "tipo": "perro"});
    map.get("mascota1").edad = 5;
    console.log(map);

}


function bootstrap_form() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()           
            }
            else{
                // if (!check_passwd(event.target)){
                //     event.preventDefault()
                //     event.stopPropagation()           
                // }
                event.preventDefault();
                getData(event.target);
                event.target.submit(); // 'this' refers to the form element
            }
            form.classList.add('was-validated')
        }, false)
    }
    )
    // Now, all validation checks were done
    console.log("Bootstrap form validation completed.");
}

bootstrap_form();
