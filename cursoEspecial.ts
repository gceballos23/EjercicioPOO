import { Curso } from "./curso";

export class CursoEspecial extends Curso {
    private notaMinimaTrabajo: number;

    constructor(pNombre: string, pModalidad: string, pminimoNotaCurso: number, pNotaMinimaTrabajo: number) {
        super(pNombre, pModalidad, pminimoNotaCurso);
        this.notaMinimaTrabajo = pNotaMinimaTrabajo;
    }

    public getNotaMinimaTrabajo(): number {
        return this.notaMinimaTrabajo;
    }

    public setNotaMinimaTrabajo(pNotaMinimaTrabajo: number): void {
        this.notaMinimaTrabajo = pNotaMinimaTrabajo;
    }
}