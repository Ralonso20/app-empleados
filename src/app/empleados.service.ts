import { Injectable } from "@angular/core";
import { Empleados } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService {
    constructor(private ventanaEmergente: ServicioEmpleadosService){}

    empleados: Array<Empleados> = [
        new Empleados("Julieta", "Torres", "Asistente", 4000),
    ];

    agregarEmpleadoServicio(empleado:Empleados){
        this.ventanaEmergente.muestraMensaje(`Nombre del empleado: ${empleado.nombre}, Apellido del empleado: ${empleado.apellido}, Cargo del empleado: ${empleado.cargo}, Salario del empleado ${empleado.salario}`);
        this.empleados.push(empleado);
    }
}