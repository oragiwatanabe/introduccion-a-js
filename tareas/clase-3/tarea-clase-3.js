// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!


let nombreUsuario = (prompt('¿Cual es tu nombre?') || '').toUpperCase();
const MI_NOMBRE = 'AGUSTIN';
const NOMBRE_TIO = 'NICOLAS';

if (MI_NOMBRE === nombreUsuario) {
    console.log(`Hola, Tocayo! Yo tambien me llamo ${nombreUsuario}`);

} else if (NOMBRE_TIO === nombreUsuario) {
    console.log(`Hola ${nombreUsuario}, te llamas igual que mi tio`);
} else if(nombreUsuario.trim().length === 0){
    console.log('No ingresaste ningun nombre');
} else {
    console.log(`Hola ${nombreUsuario}!`);
}


//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.


const edadUsuario = Number(prompt('¿Que edad tenes?'));
const MI_EDAD = 28;

if (edadUsuario > MI_EDAD) {
    console.log(`Sos mayor que yo`);

} else if (edadUsuario < MI_EDAD) {
    console.log(`Sos menor que yo`);

} else {
    console.log(`TENEMOS LA MISMA EDAD!!!`);
}

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.


const MAYORIA_DE_EDAD = 18;
const RESPUESTA_POSITIVA = 'SI';
const RESPUESTA_NEGATIVA = 'NO';

let usuarioTieneDocumento = (prompt('Tenes documento? SI/NO') || '').toUpperCase();


if (usuarioTieneDocumento === RESPUESTA_POSITIVA) {
    let edadUsuario = Number(prompt('¿Cuantos años tenes?'));

    if (edadUsuario >= MAYORIA_DE_EDAD) {
        console.log('Podes entrar al bar pibe');
    } else if {
        console.log('No podes entrar al bar pibe');
    } else {
        console.log('No entendí la respuesta');
        
    }
} else if (usuarioTieneDocumento === RESPUESTA_NEGATIVA) {
    console.log('No podes entrar sin documento al bar pibe');
} else {
    console.log('No entendimos tu respuesta');
}
 