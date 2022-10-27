import {Capacitacion} from "./capacitacion";
export class Instructor{
    private dni : number;
    private nombre : string;
    private apellido: string;
    private cupoModalidadVirtual : number;
    private capacitaciones : Capacitacion[];

    constructor(pDni:number, pNombre:string, pApellido: string, pCupoModalidadVirtual:number){
        this.dni = pDni;
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.cupoModalidadVirtual = pCupoModalidadVirtual;
        this.capacitaciones = [];
    }

    public InscribirACurso(pCapacitacion: Capacitacion):void{
        this.capacitaciones.push(pCapacitacion);
    }
}