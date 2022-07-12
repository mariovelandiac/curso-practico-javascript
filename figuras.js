// Parte del cuadrado
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return 4*lado;
} 
function areaCuadrado(lado) {
    return lado**2;
} 
console.groupEnd();


// Parte Triángulo 
console.group("Triángulos");
function alturaTriangulo(lado,base) {
    return Math.sqrt((lado**2)-(base/2)**2);
} 
function perimetroTriangulo(lado1,lado2,base) {
    return lado1+lado2+base;
}
function areaTriangulo(base,altura) {
    return (base*altura)/2;
}
console.groupEnd();


// Parte Círculo
console.group("Círculos");
const PI = Math.PI;
function perimetro(radio) {
    return 2*PI*radio;
} 

function areaCirculo(radio) {
    return PI*radio**2;
}
console.groupEnd();


// Interactuamos con HTML

function calcularperimetrocuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    if (value < 0) {
        alert("El numero ingresado debe ser mayor que cero")
    } else {
        const perimetro = perimetroCuadrado(value);
        document.getElementById("RtaPeriCuadrado").innerHTML = perimetro;
    }
}

function calcularareacuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    if (value < 0) {
        alert("El numero ingresado debe ser mayor que cero")
    } else {
        const area = areaCuadrado(value);
        document.getElementById("RtaAreaCuadrado").innerHTML = area;
    }
}