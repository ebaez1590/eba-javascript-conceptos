//05-destructuracion

//Destructuracion de objetos: 
//Consiste en juntar 2 objetos o mas en uno solo
const esteban = {
    nombre: "Esteban"
};
const jois = {
    nombre: "Johana",
    apellido: "Guerrero"
};
const estebanJois = { //Creando una nueva referencia
    ...esteban, //1 //El orden es importante para propiedades que se repiten 
    ...jois //2 //el ultimo reeeplaza a los anteriores
}
console.log(estebanJois);

//Destructuracion de arreglos: Consiste en juntar 2 arreglos o mas en uno solo
const arregloUno = [1, 2, 3, 4, 5];
const arregloDos = [6, 7, 8, 9, 10];
const superArreglo = [
    ...arregloUno, //1 //El orden importa, no se sobreescriben los elmentos del arreglo
    ...arregloDos //2
];

console.log('superArreglo', superArreglo);

console.log(...superArreglo); //itera el arreglo e imprime sus elementos