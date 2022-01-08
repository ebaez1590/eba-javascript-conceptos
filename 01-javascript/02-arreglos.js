//02-arreglos
let areglo = [6, 7, 8, 9, 10];
//Un arreglo en JavaScript puede igualarse a cualquier valor.
arreglo = 1;
arreglo = true;
arreglo = undefined;
arreglo = null;
arreglo = {};
arreglo = [true, 1, 1.1, "Esteban", "BAEZ", undefined, null, {},
    [1, 2]
];
arreglo = [6, 7, 8, 9, 10];

//Metodos para iterar arreglos
//for of: iteramos los valores dentro de un arreglo
console.log("************for of con arreglos****************");
for (let numero of arreglo) { //valores
    console.log('valor: ', numero);
}

//for in: iteramos las llaves o indices del arreglo
console.log("************for in con arreglos****************");
for (let indice in arreglo) { //Indices
    console.log('indice: ', indice);
}
//for in tambien sirve para iterar objetos y sacar las llaves o propiedades que tiene definidas

let objetoPrueba = { a: '1', b: '2', c: '3' };
console.log("************for in con objetos****************");
for (let llave in objetoPrueba) { //Indices
    console.log('llave', llave);
}

//Metodos con arreglos
console.log("************Funciones con Arreglos**************");
console.log("arreglo inicial: ", arreglo);
arreglo.push(11); //Agrega un elemento al final del arreglo
//[6, 7, 8, 9, 10, 11];
console.log("arreglo push: ", arreglo);
arreglo.pop(); //Elimina el ultimo elemento del arreglo
//[6, 7, 8, 9, 10];
console.log("arreglo pop: ", arreglo);
arreglo.unshift(5); // Agrega un elemento al inicio del arreglo
//[5, 6, 7, 8, 9, 10];
console.log("arreglo unshift: ", arreglo);
//array.splice(start, deleteCount Opt, item1, item2,... Opt)
arreglo.splice(0, 0, 4); //Eliminar 0 elemntos desde indice 0 e insertar 4
console.log("arreglo splice: ", arreglo);
const indiceNueve = arreglo.indexOf(9); //Encuentra el primer elemento y devuelve el indice
console.log("indiceNueve: ", indiceNueve);
arreglo.splice(indiceNueve, 2);
console.log("arreglo splice indiceNueve: ", arreglo);