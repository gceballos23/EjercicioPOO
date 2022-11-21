"use strict";
exports.__esModule = true;
exports.Instructor = void 0;
var Instructor = /** @class */ (function () {
    function Instructor(pDni, pNombre, pApellido, pCupoModalidadVirtual) {
        this.dni = pDni;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.cupoModalidadVirtual = pCupoModalidadVirtual;
        this.capacitaciones = [];
    }
    Instructor.prototype.inscribirACurso = function (pCapacitacion) {
        this.capacitaciones.push(pCapacitacion);
    };
    return Instructor;
}());
exports.Instructor = Instructor;
