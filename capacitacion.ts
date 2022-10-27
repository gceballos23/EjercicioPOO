import {Curso} from "./curso";

export class Capacitacion{
    private notaCurso : number[];
    private curso : Curso;
    
    constructor(pCurso:Curso){
        this.curso = pCurso;
    }

    public setCurso(pCurso: Curso):void{
        this.curso.setNotaMinimaCurso(pCurso.getNotaMinimaCurso());
    }

    public agergarNota(pNota:number):void{
        this.notaCurso.push(pNota);
    }

    public getNotasCursos():number[]{
        return this.notaCurso;
    }
    
    public getCurso():Curso{
        return  this.curso;
    }

}