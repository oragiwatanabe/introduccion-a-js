//--------------------------------MI RESOLUCION-----------------------------//
/*TAREA*/
// Crear una funcion que tome como parametro el año actual y el año de nacimiento
// y calcule la edad del usuario (aproximado)
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la funcion con estos datos
// Impriman el resultado en la consola


function calcularEdadUsuario(añoActual, añoNacimiento){
    return añoActual - añoNacimiento;
}

let añoActual = Number(prompt('Ingresar año actual:', '2026'));
let añoNacimiento = Number(prompt('Ingrese tu año de nacimiento:', '1997'));

console.log(calcularEdadUsuario(añoActual, añoNacimiento));


/*TAREA 2*/ 
// Preguntar el salario anual y calcular el salario mensual, semanal y diario


function calcularSalarioMensual(salarioAnual){
    return salarioAnual / 12;
}


function calcularSalarioSemanal(salarioAnual){
    const semanasEnUnAnio = 52;
    return salarioAnual / semanasEnUnAnio; //52 semanas en un año
}

function calcularSalarioDiario(salarioAnual){
    const diasEnUnAnio = 365;
    return salarioAnual / diasEnUnAnio; //365 dias en un año
}

const salarioAnual = Number(prompt('¿Cual es tu salario anual?', '15000000'));

console.log('El salario mensual es ' + calcularSalarioMensual(salarioAnual));
console.log('El salario semanal es ' + calcularSalarioSemanal(salarioAnual));
console.log('El salario diario es ' + calcularSalarioDiario(salarioAnual));

// Preguntar el salario mensual y calcular el anual

function calcularSalarioAnual(salarioMensual){
    return salarioMensual * 12;
}

let salarioMensual = Number(prompt('¿Cual es tu salario mensual?', '1250000'));

console.log(calcularSalarioAnual(salarioMensual));



//---------------------------------RESOLUCION DE ARG PRG------------------------------------------------//
// crear una función que tome como parámetro el año actual y el año de nacimiento
// y calcule la edad del usuario (más o menos).
// Preguntarle estos datos al usuario y guardarlos en 2 variables
// Ejecutar la función con estos datos
// Impriman el resultado en la consola
/*
function calcularEdad(anioActual, anioNacimiento) {
    return anioActual - anioNacimiento;
}

const anioActual = Number(prompt("Cuál es el año actual?"));
const anioNacimiento = Number(prompt("En qué año naciste?"));

console.log('Tenés ' + calcularEdad(anioActual, anioNacimiento) + ' años');

// Preguntar el salario anual y calcular el salario mensual
// Preguntar el salario mensual y calcular el anual
// diario... semanal, por hora. etc.

function calcularSalarioAnual(salarioMensual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioMensual * cantidadMesesEnUnAnio;
}

function calcularSalarioMensual(salarioAnual) {
    const cantidadMesesEnUnAnio = 12;
    return salarioAnual / cantidadMesesEnUnAnio;
}

function calcularSalarioSemanal(salarioAnual) {
    const cantidadSemanasEnUnAnio = 52;
    return salarioAnual / cantidadSemanasEnUnAnio;
}

function calcularSalarioDiario(salarioAnual) {
    const cantidadDiasEnUnAnio = 365;
    return salarioAnual / cantidadDiasEnUnAnio;
}

const salarioMensual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario anual es ' + calcularSalarioAnual(salarioMensual));

const salarioAnual = Number(prompt('Cuál es tu salario mensual?'));
console.log('Tu salario mensual es ' + calcularSalarioMensual(salarioAnual));
console.log('Tu salario semanal es ' + calcularSalarioSemanal(salarioAnual));
console.log('Tu salario diario es ' + calcularSalarioDiario(salarioAnual));
*/

