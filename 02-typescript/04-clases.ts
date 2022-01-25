//04-clases.ts
class Persona{
    //Definicion de atributos :   puede contener modifcador de acceso (opcional) + nombre_atributo + tipo de dato
    public nombre: string;
    public apellido:string
    static nombreReferencia: string = 'Humano';
    protected nombreYApellido = ''; //Duck typing -> string
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}
//Herencia de clases (extends)
class Usuario extends Persona {
    constructor(
        nombreParametro: string,
        apellidoParametro: string,
        public cedula: string, //Cuando se define un Modificador (public, private) esta ya es una propiedad de la clase
        public estadoCivil: string, //Modifcador  (public) -> propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
    }
}
//Instanciar un objeto
const esteban = new Usuario(
    'Esteban',
    'Baez',
    '1719629162',
    'casado'
);
esteban.nombre;
esteban.apellido;
esteban.cedula;
esteban.estadoCivil;