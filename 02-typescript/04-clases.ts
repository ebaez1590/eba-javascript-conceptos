//04-clases.ts
class Persona{
    //Definicion de atributos
    public nombre: string;
    public apellido:string
    static nombreReferencia: string = 'Humano';
    protected nombreYApellido = ''; //Duck typing -> string
}