console.log('Proyecto Final');
console.log('Central de turnos medicos')
console.log('--------------');

// como bien dijo el profesor uno podria tomar ejercicios de la clase ponerlos como preentrega pero que gracia tendria no?
// mi base y mi primer preentrega no necesita iteraciones hasta que este mas avanzado
// se agrega una calculadora para cumplir la rubrica.

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
for(let i=0; i<=10; i+=1){
    let resultado = numero * i;
    console.log(resultado)
}}
// ejecucion
validarAfiliado();
