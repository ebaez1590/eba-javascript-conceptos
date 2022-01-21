//01-variables.ts
//sintaxis: let/const/var + nombre_variable + : + tipo de dato + = + valor de la variable
var nombre = 'Esteban'; // primitivo
var nombre2 = 'Arturo'; // Clase String
//nombre = 1 //no se puede igualar a tipos de datos diferentes
nombre = 'Arturo';
var edad = 31;
var casado = true;
var fecha = new Date();
var sueldo;
sueldo = 564.90;
//Duck Typing (Si vuela como pato, si suena como pato si anda como pato entonces es un pato)
var apellido = 'Baez'; // Si le igualo a un string entonces es un string
apellido = 'Vega'; //Puedo igualar a otros strings
apellido.toUpperCase(); //metodos de string
var marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = function () { return '2'; };
var edadMultiple = 2; //puedo definir una variable que soporte varios tipos de datos separados por |
edadMultiple = '2';
edadMultiple = 222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true; // no puedo igualar porque en la deficion no acepta este tipo de dato
console.log('Variables en typescript');
