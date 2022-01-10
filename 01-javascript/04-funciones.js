//04-funciones

//Funciones con retorno
function soloNumeros(a, b, c) {
    return a - b + c;
}

//JS permite el uso de funciones sin validaciones
// soloNumeros('v', true, [1, 2, 3]);
// soloNumeros((a)=>a, (b)=>b, (c)=>c);
// soloNumeros(1, 2, 3, 4, 5, 6, 100);
// soloNumeros();

//Funciones sin retorno o de retorno undefined
function soloLetras() {
    console.log(a, b, c)
}

//Formas para nombrar Funciones
//Funciones Nombradas - Named Function
function funcionNombrada() {}

//Funciones Anonimas
const funcionSinNombre1 = function() {};
var funcionSinNombre2 = function() {};
let funcionSinNombre3 = function() {};
[].forEach(function() {}); //recibe como parametro una funcion anonima

//ejecucion de funciones
funcionNombrada();
funcionSinNombre1();
funcionSinNombre2();
funcionSinNombre3();

//Otras funciones anonimas : Fat Arrow Functions
const funcionFatArrow1 = () => {};
var funcionFatArrow2 = () => {};
let funcionFatArrow3 = () => {};
[].forEach(() => {});

//Fat Arrow Function Syntaxis
const functionFatArrow4 = () => {};
const functionFatArrow5 = (x) => { //Syntaxis normal con retorno
    return x + 1;
}
const functionFatArrow6 = (x) => x + 1; //Una sola linea //Omitir Return // Omitir llaves
const functionFatArrow7 = x => x + 1; // Si solo tenemos un parametro
const functionFatArrow8 = (x, y, z) => x + y + z; //varios parametros

// ... => Parametros infiniros que llegan en un arreglo
// Solo se puede tener un tipo de parametro ... por funcion y debe ser el ultimo parametro

function sumarParametrosInfinitos(...otrosNumeros) {
    /* let total = 0;
     otrosNumeros.forEach(
         (valorActual) => {
             total = total + valorActual;
         }
     );
     return total;*/
    return otrosNumeros.reduce((a, v) => a + v, 0);
}

console.log(sumarParametrosInfinitos(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));