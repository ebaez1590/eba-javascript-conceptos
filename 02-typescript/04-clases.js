var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//04-clases.ts
var Persona = /** @class */ (function () {
    function Persona(nombreParametro, apellidoParametro) {
        this.nombreYApellido = ''; //Duck typing -> string
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYApellido = nombreParametro + ' ' + apellidoParametro;
    }
    Persona.prototype.mostrarNombreApellido = function () {
        return this.nombreYApellido;
    };
    Persona.nombreReferencia = 'Humano';
    return Persona;
}());
//Herencia de clases (extends)
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario(nombreParametro, apellidoParametro, cedula, //Cuando se define un Modificador (public, private) esta ya es una propiedad de la clase
    estadoCivil) {
        var _this = _super.call(this, nombreParametro, apellidoParametro) || this;
        _this.cedula = cedula;
        _this.estadoCivil = estadoCivil;
        return _this;
    }
    return Usuario;
}(Persona));
//Instanciar un objeto
var esteban = new Usuario('Esteban', 'Baez', '1719629162', 'casado');
esteban.nombre;
esteban.apellido;
esteban.cedula;
esteban.estadoCivil;
