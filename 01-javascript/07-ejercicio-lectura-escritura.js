const fs = require('fs');

/*
Hacer una funcion que me acepte como parametro una variable
con el path del archivo y el contenido a agregar en el archivo.
La funcion debe tomar estos dos parametros y leer el archivo 
y anadir el texto al final del archivo
*/
//Funcion para escribir en un archivo
/*fs.writeFile(
    path,
    contenido,
    'utf-8',
    (error) => {

    }
);*/
function leerYEscribirArchivo(pathArchivo, contenidoParaArchivo) {
    fs.readFile(
        pathArchivo,
        'utf-8',
        (errorLectura, contenidoLectura) => {
            if (errorLectura) {
                console.error('Error leyendo el archivo', errorLectura);
            } else {
                let contenidoAux = contenidoLectura + contenidoParaArchivo;
                fs.writeFile(
                    pathArchivo,
                    contenidoAux,
                    'utf-8',
                    (errorEscritura) => {
                        if (errorEscritura) {
                            console.error('Error escribiendo en archivo', errorEscritura);
                        } else {
                            fs.readFile(
                                pathArchivo,
                                'utf-8',
                                (errorLecturaFinal, contenidoFinal) => {
                                    if (errorLecturaFinal) {
                                        console.error('Error en lectura final archivo', errorLecturaFinal);
                                    } else {
                                        console.log('Contenido Final del Archivo: ', contenidoFinal);
                                    }
                                }
                            );
                        }
                    }
                );
            }
        }
    );
}

leerYEscribirArchivo('./06-ejemplo.txt', ' Esteban Baez');