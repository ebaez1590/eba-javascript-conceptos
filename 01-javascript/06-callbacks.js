//06-callbacks
// Importar librerias en JavaScript
const fs = require('fs'); //fyle system se ejecuta en el sistema operativo
console.log('PRIMERO');
//06-ejemplo.txt
//La mayoria de aplicaciones web ejecutan procesos asincronos.
fs.readFile( //Comunicacion con un sistema externo como protocolo http
    './06-ejemplo.txt',
    'utf-8',
    (error, contenido) => {
        if (error) {
            console.error({ mensaje: 'Error leyendo contenido ejemplo', error: error });
        } else {
            fs.readFile( //Comunicacion con un sistema externo como protocolo http
                './01-variables.js',
                'utf-8',
                (errorVariables, contenidoVariables) => {
                    if (errorVariables) {
                        console.error({ mensaje: 'Error leyendo contenido variables', error: errorVariables });
                    } else {

                        console.log(contenido, contenidoVariables);
                    }

                }
            );
        }

    }
);

console.log('TERCERO');
//Revisar callback hell en JS