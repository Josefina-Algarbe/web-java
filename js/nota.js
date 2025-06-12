function nota(nota){
    return nota > 6 ? "Aprobado" : "Desaprobado";
}

function calcularAprobado(){
    const num= parseFloat(prompt("Ingrese la nota"));
    alert("Usted está: "+ nota(num));
}