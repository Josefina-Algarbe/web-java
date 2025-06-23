function verificarEdad() {
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);

    if (!nombre || isNaN(edad)) {
        alert('Por favor, ingresa tu nombre y edad.');
        return;
    }

    if (edad >= 18) {
        alert(`${nombre}, eres mayor de edad`);
    } else {
        alert(`${nombre}, no eres mayor de edad.`);
    }
}