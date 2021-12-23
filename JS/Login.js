// Requisitos necesarios:
//   1. Brindar la opción de Registro o ingreso
//   2. Permitir registrarse
//   3. Verificar contraseña ingreso de contraseña
//   4. Permitir ingresar.
//   5. Dar la opción de ingresar sin logeo o registro


// ------------------ BIENVENIDA ------------------

let mensajeBienvenida = prompt(
  "Bienvenido, dinos que deseas hacer en tu primera visita:\n" +
    "1. Registrarte.\n" +
    "2. Ingresar\n" +
    "3. Salir"
);

let respuesta = mensajeBienvenida;

if (respuesta === "1") {
  registro();
} else if (respuesta === "2"){
  ingreso();
} else {
  respuesta = false
}

// ------------------ ETAPA DE REGISTRO ------------------

function registro() {
  let resgistroNombre = prompt("1. Dinos tu nombre");
  let resgistroEmail = prompt("2. Escribe tu Email de usuario");
  let resgistroPassword = prompt("3. Escribe tu contraseña");
  let repeatPassword = prompt("4. Repite tu contraseña");

  while (repeatPassword) {
    if (repeatPassword === resgistroPassword) {
      alert("Hola " + resgistroNombre + ", tu cuenta fue creada con éxito.");
      repeatPassword = false;
    } else {
      alert("La contraseña ingresada no es la misma. Repite la contraseña");
      repeatPassword = prompt("4. Repite tu contraseña");
    }
  }
}

// ------------------ ETAPA DE INGRESO ------------------
function ingreso() {
  let ingresoEmail = prompt("Bienvenido, ingresa tu email");
  let ingresoPassword = prompt("Ingresa tu contraseña");

  let email = "esteban@gmail.com"
  let password = "pass"
  let nombreUsuario = "Esteban"

  while (ingresoPassword) {
    if (
      ingresoEmail === email &&
      ingresoPassword === password 
      
    ) {
      alert("Hola " + nombreUsuario);
      ingresoPassword = false;
    } else {
      alert("El usuario o contraseña es incorrecto. Vuelve a intentarlo");
      ingresoEmail = prompt("Hola bienvenido, ingresa tu email");
      ingresoPassword = prompt("Ingresa tu contraseña");
    }
  }
}



