//Mutables e Inmutables
//Mutables -> variables que puedben cambiar o puede ser reasignada
var numeroUno = 1; //los tipos de datos en js no se deben poner
let numeroDos = 2;
numeroUno = 6;
numeroDos = 5;
numeroUno = false;
numeroDos = true;
//Inmmutables -> variables que no pueden tomar un valor diferente al inicial
const configArchivos = 'XML';
//configArchivos = 'PDF'; // una varible inmutable no puede cambiar de valor
//En variables Inmutables actualmente utilizar const y let, sobre var


//Tipos de variables
//Primitivos
const numero = 1; //number
const sueldo = 1.3; //number
const texto = "Esteban"; //string
const apellido = 'Baez'; //string
const booleanooo = false //boolean
const hijos = null; //object
const zapatos = undefined; //undefined

//typeof para saber el tipo de dato de una variable
console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleanooo);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof Number('asd')); //number -> NaN pertenece a number
console.log(Number('asd')); //NaN Not a Number

//Truty Falsy
//En lenguajes convencionales la sentencia recibe solamente variables boolean
//Sin embargo en jsvascript puede recibir otros tipos de dato por ejm

//String
if ("") { // una variable vacia se considera false
    console.log("String vacio es Truty");
} else {
    console.log("String vacio es Falsy");
}

if ("Esteban") { //una variable llena se considera true
    console.log("String lleno es Truty");
} else {
    console.log("String lleno es Falsy");
}

//Numbers
if (-100) { //Numeros negativos da como resultado true
    console.log("Negativos es Truty");
} else {
    console.log("Negativos es Falsy");
}
if (0) { //Cero da como resultado false
    console.log("Cero es Truty");
} else {
    console.log("Cero es Falsy");
}
if (1000) { //Positvos da como resultado true
    console.log("Positivos es Truty");
} else {
    console.log("Positivos es Falsy");
}

//Null  Undefined y NaN son Falsy

if (null) {
    console.log("Null es Truty");
} else {
    console.log("Null es Falsy");
}
if (undefined) {
    console.log("undefined es Truty");
} else {
    console.log("undefined es Falsy");
}
if (NaN) {
    console.log("NaN es truty");
} else {
    console.log("NaN es falsy")
}

//Objetos js- Arreglos
//Un objeto js es diferente a un objeto JSON
const esteban = {
    nombre: "Esteban", //llave: valor
    false: 'Baez',
    hijos: null,
    zapatos: undefined,
    casado: true,
    ropa: {
        color: 'azul',
        talla: 38
    },
    mascotas: ['Roco', 'Akamaru'],
};

//acceder y modificar las propiedades de un objeto
esteban.nombre; // "Esteban"
esteban.apellido; //'Baez'
//Existen 2 formas de acceder a las propiedades de los objetos js utilizando . o utilizando [nombre_propiedad]
esteban["nombre"];
console.log("***************Antes de modificar objeto********************");
console.log(esteban);
esteban.nombre = "Arturo";
console.log("***************Modificado por .******************");
console.log(esteban);
esteban["nombre"] = "Esteban";
console.log("***************Modificado por []******************");
console.log(esteban);
esteban.sueldo; //undefined
console.log(esteban.sueldo);
esteban["sueldo"] = 2.5;
console.log(esteban.sueldo);
esteban.gastos = 1.2;
console.log(esteban["gastos"]);
esteban.nombre = undefined;
console.log(esteban);
console.log(Object.keys(esteban)); //devuelve un arreglo con todas las llaves o propiedades del objeto
console.log(Object.values(esteban)); // devuelve un arreglo de los valores que tienen las propiedades en ese momento
delete esteban.nombre; //delete es un metodo de js que permite eliminar una propiedad de un objeto js
console.log("despues de eliminar la propiedad nombre");
console.log(esteban);
console.log("Object.entries");
console.log(Object.entries(esteban)); //devuelve un arreglo de pares (key, value)

//Variables por valor o por referencia?
//Las variables por valor en JS son las primitivas: number, string, boolean
console.log("******************************Variables por valor*********************************");
let edadEsteban = 31;
let edadArturo = edadEsteban;

console.log(edadEsteban);
console.log(edadArturo);
console.log("Nuevas edades");
edadEsteban += 1;
console.log(edadEsteban);
console.log(edadArturo);

//Variables por referencia : object ({},[]) Objetos JavaScript y arreglos
console.log("******************************Variables por referencia*********************************");
// let jois = {
//     nombre: "Johana"
// };
// let lisa = jois; // las 2 variables apuntan al mismo objeto por tanto tenemos dos punteros a un mismo objeto
// console.log(jois);
// console.log(lisa);
// lisa.nombre = "Elizabeth";
// console.log("Despues de cambiar el nombre");
// console.log(jois);
// console.log(lisa);
// delete lisa.nombre;
// console.log(jois);
// console.log(lisa);

let jois = {
    nombre: "Johana"
};
let lisa = Object.assign({}, jois); //la funcion assign de Object permite clonar un objeto, es decir se instancia un nuevo objeto con lo que tiene el inicial.
//esto hace que se cree un nuevo objeto en memoria, es decir las variables apuntan a diferentes referencias.
console.log(jois);
console.log(lisa);
lisa.nombre = "Elizabeth";
delete jois.nombre;
console.log("Luego de los cambios");
console.log(jois);
console.log(lisa);

//ARREGLOS:
console.log("*******************Arreglos*****************");
let arregloNumeros = [1, 2, 3, 4, 5];
let arregloClonado = Object.assign([], arregloNumeros);
console.log(arregloNumeros);
console.log(arregloClonado);
arregloNumeros[0] = 200;
arregloClonado[0] = 100;
console.log("Arreglos luego de los cambios");
console.log(arregloNumeros);
console.log(arregloClonado);