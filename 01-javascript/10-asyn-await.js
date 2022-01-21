//10-async-await.js
const promesaLeerArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('Contenido Leer Archivo');
        }
    );
}
const promesaEscribirArchivo = () => {
    return new Promise(
        (res, rej) => {
            res('Contenido Escribir Archivo');
            //rej('Error =('); //Descomentar para probar el catch
        }
    );
}

//Asyn y Amait se puede usar en 
//1) Metodos de clases
//2) En cualquier funcion
//Esto no es posible, porque no esta dentro de una funcion
//const respuesta = await promesaEscribirArchivo;

//Al momento de usar la palabara ASYNC, esa funcion se convierte en una promesa
const ejemplo1 = async function() {}
const ejemplo2 = async() => {}
async function ejercicio() {
    console.log('1');
    let nuevoContenido = '';
    try {
        console.log('2');
        const contenidoArchivoActual = await promesaLeerArchivo();
        console.log(contenidoArchivoActual);
        console.log('3');
        await promesaEscribirArchivo();
        console.log('4');
        nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');
    } catch (error) {
        console.error(error);
        throw new Error();
    }
    console.log('6');
    console.log('7');
    return nuevoContenido;
}
ejercicio().then(
    (data) => {
        console.log('Esta es la respuesta del asyn await: ', data);
    }
).catch(
    (error) => {
        console.log('Error del catch: ', error);
    }
).finally();