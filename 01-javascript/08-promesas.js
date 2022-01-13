//08-promesas
const fs = require('fs');
//Las promesas son una Clase que recibe 2 parametros que son resolve y reject
//Las promesas son asyncronas
//Lo optimo es tener un callback por promesa.
//Encapsular una promesa dentro de una funcion sirve exclusivamente para poder enviar parametros a la promesa
function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise( // Definicion de la Promesa
        (resolve, //return
            reject //throw
        ) => {
            if (numero % 2 === 0) {
                resolve(numero);
            } else {
                reject('No es Par');
            }
        }
    )
    return miPrimerPromesa;
}

function promesaElevarAlCuadrado(numero) {
    const miSegundaPromesa = new Promise(
        (resolve, reject) => {
            const numeroElevadoAlCuadrado = Math.pow(numero, 2);
            resolve(numeroElevadoAlCuadrado);
        }
    );
    return miSegundaPromesa;
}

//Uso de las promesas
//Las promesas tienen 3 metodos importantes
//.then() => try
//.catch() => catch
//.finally() => finally
//Dentro de cualquier .then() se puede devolver una promesa.
promesaEsPar(8)
    .then( //Aceptan un return de promesas
        (datosPromesa) => {
            console.log(datosPromesa);
            return promesaElevarAlCuadrado(datosPromesa);
        }
    )
    .then(
        (datosElevarAlCuadrado) => {
            console.log(datosElevarAlCuadrado);
        }
    )
    .catch(
        (error) => {
            console.log(error);
        }
    )
    .finally()