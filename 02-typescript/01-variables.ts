//01-variables.ts
//sintaxis: let/const/var + nombre_variable + : + tipo de dato + = + valor de la variable
let nombre: string = 'Esteban';// primitivo
let nombre2: String = 'Arturo'; // Clase String
//nombre = 1 //no se puede igualar a tipos de datos diferentes
nombre = 'Arturo';
let edad: number = 31;
let casado: boolean = true;
let fecha: Date = new Date();
let sueldo: number;
sueldo = 564.90;

//Duck Typing (Si vuela como pato, si suena como pato si anda como pato entonces es un pato)
let apellido = 'Baez'; // Si le igualo a un string entonces es un string
apellido = 'Vega';//Puedo igualar a otros strings
apellido.toUpperCase(); //metodos de string

let marihuana: any = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';

let edadMultiple: number | string | Date = 2; //puedo definir una variable que soporte varios tipos de datos separados por |
edadMultiple = '2';
edadMultiple = 222;
edadMultiple = 'dos';
edadMultiple = new Date();
//edadMultiple = true; // no puedo igualar porque en la deficion no acepta este tipo de dato
console.log('Variables en typescript');


