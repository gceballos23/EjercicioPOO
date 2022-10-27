"use strict";
exports.__esModule = true;
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(pNombre, pModalidad, pMinimoNotaCurso) {
        this.nombre = pNombre;
        this.modadalidad = pModalidad;
        this.minimoNotaCurso = pMinimoNotaCurso;
    }
    Curso.prototype.getModalidad = function () {
        return this.modadalidad;
    };
    Curso.prototype.getNotaMinimaCurso = function () {
        return this.minimoNotaCurso;
    };
    Curso.prototype.setNotaMinimaCurso = function (pNota) {
        this.minimoNotaCurso = pNota;
    };
    return Curso;
}());
exports.Curso = Curso;
