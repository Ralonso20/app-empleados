import { Component } from '@angular/core';
import { Empleados } from './empleado.model';
import { EmpleadosService } from './empleados.service';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado Empleados';

  constructor(private servicio: ServicioEmpleadosService, private empleadosService:EmpleadosService){
    this.empleados = this.empleadosService.empleados;
  }

  empleados:Array<Empleados>=[];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  agregarEmpleado(){
    let empleado=new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleadosService.agregarEmpleadoServicio(empleado);
  }

}
