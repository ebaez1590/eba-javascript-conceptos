var _this = this;
//Esto es una variable
var user = {
    nombre: 'Esteban'
};
//Implementacion de la interface
var user1 = {
    nombre: 'Johana',
    apellido: 'Guerrero',
    edad: 28,
    sueldo: 120.00,
    casado: 1,
    estado: 'AC',
    imprimirUsuario: function (mensaje) {
        return 'El mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
