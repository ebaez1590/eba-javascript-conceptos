//02-interfaces.ts
//interface es un tipo de dato
//Las interfaces al transpilar no ocupan espacio en el archivo .js
//Esta es la ventaja de las interfaces para tipar los datos
interface Usuario {
    nombre: string;
    apellido: string;
    edad: number | undefined; //number | undefined = ? quiere decir que el aributo es opcional
    sueldo?: number; //Opcional ? = tipo_dato | undefined
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string)=> string | 'BN';
    calcularImpuesto: (impuesto: number)=> number;
    estadoActual: () => 'AP' | 'AF' | 'AT';
}
//Esto es una variable
let user = {
    nombre: 'Esteban',
}
//Implementacion de la interface
let user1: Usuario = {
    nombre: 'Johana',
    apellido: 'Guerrero',
    edad: 28,
    sueldo: 120.00,
    casado: 1,
    estado: 'AC',
    imprimirUsuario: (mensaje) => {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: impuesto => {
        return this.sueldo + this.sueldo * impuesto;
    },
    estadoActual: () => {
        switch (this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}