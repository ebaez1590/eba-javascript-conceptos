//09-ejercicio-lec-esc-promesas
const fs = require('fs');
/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar al contenido
del archivo. La funcion debe tomarse estos dos parametros y leer
el archivo y anadir el texto al final del archivo. Al final
leer el archivo nuevamente en imprimirlo en la consola
Todo esto realizar con promesas
-Promesa de Lectura
-Promesa de escritura
*/

//Promesa de lectura
function promesaLecturaArchivo(path) {
    const promesaLectura = new Promise((
        resolve,
        reject
    ) => {
        fs.readFile(
            path,
            'utf-8',
            (errorLectura, contenidoLectura) => {
                if (errorLectura) {
                    console.error('Error Leyendo Archivo: ', errorLectura);
                    reject(errorLectura);
                } else {
                    resolve(contenidoLectura);
                }
            }
        );
    });
    return promesaLectura;
}
//Promesa escritura
function promesaEscrituraArchivo(path, contenidoActual, nuevoContenido) {

    const promesaEscritura = new Promise((
        resolve,
        reject
    ) => {
        fs.writeFile(
            path,
            contenidoActual + '\n' + nuevoContenido,
            'utf-8',
            (errorEscritura) => {
                if (errorEscritura) {
                    console.error('Error Escribiendo Archivo: ', errorEscritura);
                    reject(errorEscritura);
                } else resolve();
            }
        );
    });
    return promesaEscritura;

}

function ejercicio(path, nuevoContenido) {
    promesaLecturaArchivo(path)
        .then(
            (datosPromesaLectura) => {
                return promesaEscrituraArchivo(path, datosPromesaLectura, nuevoContenido);
            }
        )
        .then(
            (datosPromesaEscritura) => {
                return promesaLecturaArchivo(path);
            }
        )
        .then(
            (datosLecturaFinal) => {
                console.log('Archivo Final: ', datosLecturaFinal);
            }
        )
        .catch(
            (error) => {
                console.error(error);
            }
        );
}
ejercicio('./06-ejemplo.txt', 'Ejercicio con promesas');