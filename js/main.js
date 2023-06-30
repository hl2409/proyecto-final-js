console.log('Proyecto Final');
console.log('Central de turnos medicos')
console.log('--------------');

// sistema de turnos
/* si hay una calculadora forzada para la rubrica es por que con lo aprendido hasta ese momento, 
no veia necesidad de usar una iteracion en la base de lo que sera el proyecto final, 
en todo caso no le llamen primer preentrega y hago ejercicios y cumplo las rubricas con menos esfuerzo, 
que debido a mala o falta de comunicacion de los tutores uno se siente perdiddo, pero uno solo no, somos un grupo de estudiantes, y bastante grande que esta molesto por las formas, por no explicar, por no responder.
la segunda preentrega terminara siendo algo hecho completamente de cero, si esta mas que claro que estoy aplicando los conceptos correctamente , y no los estoy forzando donde no los necesito, no podes bajar puntos por que sos un vago. desmotivas.
*/
// cambian los tutores sin avisar, el tutor no se comunica ni pregunta por que mi trabajo esta atrasado, 
//estuve 20 dias enfermo todos los dias viendo clases por que estaba atrasado coder me dijo que no me haga problema que si no me cambiaba de comision todo se arreglaba
// llega uno que ni hola dice te corrige sin comentarios, y te corrige para abajo basandose en un powerpoint.

console.log('Bienvenido a la central de turnos');
console.log('--------------');

let afiliado = Number(prompt('Ingrese numero de afiliado'));
let nombre = 'Juan Perez';
let turno1 = '1. 24/09 a las 11hs';
let turno2 = '2. 24/09 a las 13hs';
let turno3 = '3. 25/09 a las 13hs';
let turno4 = '4. 27/09 a las 11hs';
let turno5 = '5. 27/09 a las 17hs';


function validarAfiliado(){

    if (afiliado === 1234){
        console.log('Bienvenido ' + nombre);
        console.log('--------------');
        menuOpciones();
    }else{
        console.log('el numero de afiliado no existe');
    }
}

function menuOpciones(validarAfiliado){
    console.log('Ingrese la opcion deseada:');
    console.log('1: Sacar turno');
    console.log('2: Cancelar turno');
    console.log('3: Salir');
    console.log('4: calculadora forzada para la rubrica...');
    console.log('--------------');
    
    let opcionSeleccionada = (prompt('Ingrese la opcion deseada'));
    
    switch(opcionSeleccionada){
        case '1':
            sacarTurno();
            break;
        case '2':
            CancelarTurno();
            break;
        case '3':
            salir();
        case '4':
            calculadora();
        default:
            console.log('');
    }
}

function sacarTurno(){
    console.log('Los turnos disponibles son');
    console.log(turno1);
    console.log(turno2);
    console.log(turno3);
    console.log(turno4);
    console.log(turno5);
    console.log('--------------');
    turnoSeleccionado = prompt('Ingrese el turno que desea');
    console.log('Turno asignado correctamente');
}

function cancelarTurno(){
    console.log('usted no tiene ningun turno asignado');
}

function salir(){
    console.log('gracias por su visita');
}

function calculadora(){
let numero = Number(prompt("Tabla del: "));
console.log(numero);
console.log(typeof numero);
for(let i=0; i<=10; i+=1){
    let resultado = numero * i;
    console.log(resultado)
}}
// ejecucion
validarAfiliado();
