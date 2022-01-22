//03-funciones.ts
function sumarNumeros (
    numeroInicial: number,
    ...numerosInfinitos: number[]
): number {
    return numeroInicial;
}
//sumarNumeros('asd','ads'); //Otros tipos de datos distintos a los definidos en la funcion no son permitidos
sumarNumeros(1,1,2,3,4,5,6);

//funcion sin retorno o de tipo void o que retorna undefined
function imprimir (mensaje: string): void { //retorna undefined
    console.log('Hola: ', mensaje);
}

//Definicion de arreglos
const arregloNumeros: number[] = [1,2];
const arregloNumerosDos: Array<number> = [1,2];
const arregloNumerosTres: (number | string | boolean) [] = [1,'dos', true];
const arregloNumerosCuatro: Array<number | string | boolean> = [1, 'dos', false];
let arregloNumerosCinco: number[] | string[] = [1,2];
arregloNumerosCinco = ['uno', 'dos'];