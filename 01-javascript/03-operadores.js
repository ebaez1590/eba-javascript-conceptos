//03-operadores.js
const arreglo = [{
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];
//Los operadores reciben Funciones como parametros
//Los operadores evitan que usemos for y while

//FUNCIONES COMO PARAMETROS
//PRIMER OPERADOR FIND
// enviamos una expresion -> Truty o Falsy
// devuelva el primero que cumpla con la condicion


const respuestaFind = arreglo.find(
    function(valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual', valorActual);
        console.log('indiceActual', indiceActual);
        console.log('arregloCompleto', arregloCompleto);
        return valorActual.nombre === "Cristian"; //devuelve el objeto dentro del arreglo
    }
);
console.log('respuestaFind', respuestaFind);

//SEGUNDO OPERADOR FINDINDEX
// enviamos una expresion -> Truty o Falsy
// devuelva el primero que cumpla con la condicion

const respuestaIndex = arreglo.findIndex(
    function(valorActual, indiceActual, arregloCompleto) {
        return valorActual.nombre === "Cristian";
    }
);
console.log('respuestaIndex', respuestaIndex); // indice del elemento sino encuentra -1

//TERCER OPERADOR FOREACH
// itera el arreglo

const respuestaForEach = arreglo.forEach(
    function(valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual', valorActual)
    }
);
console.log('respuestaForEach', respuestaForEach); // siempre retorna undefined

//CUARTO OPERADOR MAP
// enviamos como parametro los datos del nuevo arreglo
// devuelve el nuevo arreglo

const respuestaMap = arreglo.map(
    function(valorActual, indiceActual, arregloCompleto) {
        const nuevoElemento = {
            //id: valorActual.id,
            nombre: valorActual.nombre,
            nota: valorActual.nota + 1,
        }
        return nuevoElemento;
    }
);

console.log('repuestaMap: ', respuestaMap);
console.log('arregloOriginal: ', arreglo);

// OPERADOR FILTER
// enviamos como parametro una expresion truty falsy
// devuelve un arreglo con los elementos que cumplen la condicion

const respuestaFilter = arreglo.filter(
    (valorActual, indiceActual, arregloCompleto) => {
        return valorActual.nota == 20;
    }
);

console.log('respuestaFilter: ', respuestaFilter);
console.log('arreglo: ', arreglo);

//OPERADOR SOME
//Devuelve boolean
//Ejm: Hay alguna nota menor a 9? si no
//OR logico
const respuestaSome = arreglo.some(
    (valorActual, indiceActual, arregloCompleto) => {
        return valorActual.nota < 9;
    }
);
console.log('repuestaSome', respuestaSome);

//OPERADOR EVERY
//Devuelve booleano
//Ejmp: Todas las notas son mayores a 14? si no
//AND logico

const respuestaEvery = arreglo.every(
    (valorActual, indiceActual, arregloCompleto) => {
        return valorActual.nota > 14;
    }
);
console.log('respuestaEvery', respuestaEvery)