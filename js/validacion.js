function validar() {
    const usuario = document.getElementById("usuario").value.trim();
    const contrasena = document.getElementById("contrasena").value.trim();

    // Validar usuario vacío
    if (usuario === "") {
        alert("Por favor, escribí tu usuario.");
        return;
    }

    // Validar contraseña con requisitos
    if (
        contrasena === "" ||
        contrasena.length < 8 ||
        !/\d/.test(contrasena) ||              // al menos un número
        !/[!@#$%^&*(),.?":{}|<>]/.test(contrasena) ||  // al menos un caracter especial
        !/[A-Z]/.test(contrasena)              // al menos una mayúscula
    ) {
        alert("Por favor, escribí una contraseña válida.\nDebe tener al menos:\n- 8 caracteres\n- 1 número\n- 1 letra mayúscula\n- 1 carácter especial");
        return;
    }

    // Validación de usuario y contraseña correctos
    if (usuario === "admin" && contrasena === "Hola1234.") {
        alert(`Usted está logeado. ¡Bienvenido, ${usuario}!`);
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}
