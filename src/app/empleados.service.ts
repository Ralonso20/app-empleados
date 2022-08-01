import { Empleados } from "./empleado.model";

export class EmpleadosService {
    empleados: Array<Empleados> = [
        new Empleados("Julieta", "Torres", "Asistente", 4000),
    ];

    agregarEmpleadoServicio(empleado:Empleados){
        this.empleados.push(empleado);
    }
}