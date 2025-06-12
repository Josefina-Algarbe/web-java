function saludar(){
    const nombre = document.getElementById("nombre").value;
    const saludo = "Hola " + nombre + ", bienvenido/a a quinto!";
    document.getElementById("saludo").textContent = saludo;
    alert(saludo);
}