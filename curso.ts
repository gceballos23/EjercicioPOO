export class Curso{
    protected nombre : string;
    protected modadalidad : string;
    protected minimoNotaCurso:number;

    constructor(pNombre : string, pModalidad : string, pMinimoNotaCurso: number){
        this.nombre = pNombre;
        this.modadalidad = pModalidad;
        this.minimoNotaCurso = pMinimoNotaCurso;
    }

    public getModalidad():string{
        return this.modadalidad;
    }

    public getNotaMinimaCurso():number{
        return this.minimoNotaCurso;
    }

    public setNotaMinimaCurso(pNota:number):void{
        this.minimoNotaCurso = pNota;
    }
}