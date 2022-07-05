// Parte del cuadrado
console.group("Cuadrados");

// ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: "+ ladoCuadrado)

function perimetroCuadrado(lado) {
    return 4*lado;
} 

// console.log("El perimetro del cuadrado es: "+ perimetroCuadrado + " cm")

function areaCuadrado(lado) {
    return lado**2;
} 
// console.log(`El área del cuadrado es igual a: ${areaCuadrado} cm^2`) 
console.groupEnd();

// Parte Triángulo 
console.group("Triángulos");
// Caso Triangúlo Isóceles
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
function alturaTriangulo(lado,base) {
    return Math.sqrt((lado**2)-(base/2)**2);
} 

// console.log(`Los lados del triangúlo miden ${ladoTriangulo1} cm, la base mide ${baseTriangulo} cm y altura es igual a ${alturaTriangulo.toFixed(2)} cm`)

function perimetroTriangulo(lado1,lado2,base) {
    return lado1+lado2+base;
}
// console.log(`El perimetro del tríangulo es igual a ${perimetroTriangulo} cm`)

function areaTriangulo(base,altura) {
    return (base*altura)/2;
}
// console.log(`El área del tríangulo es igual a ${areaTriangulo.toFixed(2)} cm^2`)

console.groupEnd();

// Parte Círculo
console.group("Círculos");

// const radio = 4;
// const diametro = 2*radio; 
const PI = Math.PI;

// console.log(`El radio del círculo es igual a ${radio} cm`)

// Calculo del perimetro y el área
function perimetro(radio) {
    return 2*PI*radio;
} 

function areaCirculo(radio) {
    return PI*radio**2;
}

// console.log(`La circunferencia es igual a ${perimetro.toFixed(2)} cm`)
// console.log(`El área del ciruclo es igual a ${area.toFixed(2)} cm^2`)

console.groupEnd();