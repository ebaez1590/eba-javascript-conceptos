//03-funciones.ts
function sumarNumeros(numeroInicial) {
    var numerosInfinitos = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numerosInfinitos[_i - 1] = arguments[_i];
    }
    return numeroInicial;
}
//sumarNumeros('asd','ads'); //Otros tipos de datos distintos a los definidos en la funcion no son permitidos
sumarNumeros(1, 1, 2, 3, 4, 5, 6);
//funcion sin retorno o de tipo void o que retorna undefined
function imprimir(mensaje) {
    console.log('Hola: ', mensaje);
}
//Definicion de arreglos
var arregloNumeros = [1, 2];
var arregloNumerosDos = [1, 2];
var arregloNumerosTres = [1, 'dos', true];
var arregloNumerosCuatro = [1, 'dos', false];
var arregloNumerosCinco = [1, 2];
arregloNumerosCinco = ['uno', 'dos'];
