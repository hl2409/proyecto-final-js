console.log('Proyecto Final');
console.log('Central de turnos medicos')
console.log('--------------');

// sistema de turnos

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

// ejecucion
validarAfiliado();





















/* let opciones = Number(prompt('Ingrese la opcion deseada.'));
let afiliado = 113321
let turno1 = '1. 24/09 a las 11hs'
let turno2 = '2. 24/09 a las 13hs'
let turno3 = '3. 25/09 a las 13hs'
let turno4 = '4. 27/09 a las 11hs'
let turno5 = '5. 27/09 a las 17hs'

function sacarTurno(){
    console.log('Los turnos disponibles son');
    console.log(turno1);
    console.log(turno2);
    console.log(turno3);
    console.log(turno4);
    console.log(turno5);
    seleccionarTurno()
}

function seleccionarTurno(sacarTurno){
    prompt(ingrese el turno deseado);
}



switch(opciones1){
    case 1:
        sacarTurno()
    case 2:
        


    //validar numero de afiliado
    // opciones 
        //sacar turno
            // ver fechas
                //seleccionar fecha
                    //finalizar
        // ver mis turnos
            // ver fecha asignada
            // cancelar turno
                //finalizar
        // salir1
            

}


 */