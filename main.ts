import { Curso } from "./curso";
import { Capacitacion } from "./capacitacion";
import { Instructor } from "./Instructor";

import * as ReadlineSync from "readline-sync";

let input = ReadlineSync;

console.log("CREAR INSTRUCTOR");

let instructor1 = new Instructor(input.question("Ingrese DNI instructor: "),
                                    input.question("Ingrese Nombre Instructor: "),
                                    input.question("Ingrese Apellido Instructor: "),
                                    input.question("Ingrese Cupo Modalidad Virtual: "));

console.log("SE AGREGO EL SIGUIENTE INSTRUCTOR:" + instructor1);

console.log("CREAR CURSO");

let curso1 = new Curso(input.question("Ingrese Nombre del Curso: "),
                       input.question("Ingrese Modalidad: "),
                       input.question("Ingrese Nota Minima Curso: "));

console.log("curso creado" + curso1.getModalidad());

console.log("CREA CAPACITACION");

let capacitacion1 = new Capacitacion(curso1);

console.log("CREA CAPACITACION");

console.log("ASOCIAR INSTRUCTOR");

instructor1.InscribirACurso(capacitacion1);

console.log("LISTADO DE CURSOS"+ instructor1);



