"use strict";
exports.__esModule = true;
exports.Capacitacion = void 0;
var Capacitacion = /** @class */ (function () {
    function Capacitacion(pCurso) {
        this.curso = pCurso;
    }
    Capacitacion.prototype.setCurso = function (pCurso) {
        this.curso.setNotaMinimaCurso(pCurso.getNotaMinimaCurso());
    };
    Capacitacion.prototype.agergarNota = function (pNota) {
        this.notaCurso.push(pNota);
    };
    Capacitacion.prototype.getNotasCursos = function () {
        return this.notaCurso;
    };
    Capacitacion.prototype.getCurso = function () {
        return this.curso;
    };
    return Capacitacion;
}());
exports.Capacitacion = Capacitacion;
