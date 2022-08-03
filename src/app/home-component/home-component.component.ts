import { Component, OnInit } from '@angular/core';
import { Empleados } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  ngOnInit(): void {
  }

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
