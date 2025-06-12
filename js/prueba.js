function cuadrado(numero){
    return numero*numero;
}

function esPar(numero){
    return numero % 2 === 0 ? "Par" : "Impar";
}

function promedio (a, b, c){
    return (a + b + c)/3;
}

function probarCuadrado(){
    const num = parseFloat(prompt("Ingresá un número"));
    alert("El cuadrado es: " + cuadrado(num));
}

function probarParImpar(){
    const num = parseInt(prompt("Ingresá un número"));
    alert("El número es: " + esPar(num));
}

function probarPromedio(){
    const a= parseFloat(prompt("Ingrese el primer número"));
    const b= parseFloat(prompt("Ingrese el segundo número"));
    const c= parseFloat(prompt("Ingrese el tercer número"));
    alert("El promedio es: "+ promedio(a, b, c));
}