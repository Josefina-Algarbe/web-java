function verificarlogin() {
    var usuario= document.getElementById("usuario").value;
    var contrasena= document.getElementById("contraseña").value;
    var mensaje= document.getElementById("mensaje");

if (usuario == "admin" && contrasena == "1234"){
mensaje.textContent="✅ Acceso concedido. Bienvenido/a" + usuario;
mensaje.style.color="green";
} else{
mensaje.textContent="❌ Usuario o contraseña incorrectos.";
mensaje.style.color="red";
}
}