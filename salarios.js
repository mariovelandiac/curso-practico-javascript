function promedioArit (array) {
    const sumaNumerador = array.reduce(
        function (semilla = 0,nextvalue) {
            return semilla + nextvalue;
        }
    )
    const denominador = array.length;
    const promedioLista = sumaNumerador/denominador
    return promedioLista;
};

const names = [
    "Mario",
    "Alejandra",
    "Andrea",
    "Sofía",
    "Pedro",
    "Rodrigo",
    "Carlos",
    "Karina",
    "Kimberly",
    "Andrés",
    "Ricardo"
];

const ages = [25,26,24,35,65,41,25,23,26,24,45];
const salaries = [920, 280, 406, 505, 620, 709, 820, 5050, 605, 499,605];
const categories = ["nombre","edad","salarios"]
const summary = [names,ages,salaries];
let mainInfo = [];
for (let i = 0; i < names.length; i++) {
    mainInfo.push({
        nombre: names[i],
        edad: ages[i],
        salario: salaries[i],
    })
};


// Calculo de la mediana
const salariosColSorted = salaries.slice().sort((a,b)=>a-b);
const isPairok = salariosColSorted.length % 2;
switch (isPairok) {
    case 0:
    const n1 = salariosColSorted.length/2;
    const n2 = (salariosColSorted.length/2) - 1
    const element1 = salariosColSorted[n1];
    const element2 = salariosColSorted[n2];
    var mediana = promedioArit([element1,element2]);
    break
    case 1:
    const n = (salariosColSorted.length-1)/2;
    var mediana = salariosColSorted[n];
    break
} 
document.getElementById("median").innerHTML = mediana + " Dolares";

// Calculo del promedio 
var promedio = promedioArit(salaries);
document.getElementById("average").innerText = promedio.toFixed(0) + " Dolares"

// Calculo del Top 10
const starts = salariosColSorted.length*0.90;
const parts = salariosColSorted.length-Math.floor(starts);
const salariosTop10 = salariosColSorted.splice(starts,parts);
console.log(salariosTop10)
const salariosTop10mean = promedioArit(salariosTop10);
document.getElementById("top").innerHTML = salariosTop10mean.toFixed(0) + " Dolares";