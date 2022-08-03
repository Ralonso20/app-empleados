import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Empleados } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {



  ngOnInit(): void {
    this.accion=parseInt(this.routeAc.snapshot.queryParams['accion']);
  }
  
  constructor(private route:Router ,private routeAc:ActivatedRoute, private servicio: ServicioEmpleadosService, private empleadosService:EmpleadosService){
    this.empleados = this.empleadosService.empleados;
    this.indice=this.routeAc.snapshot.params['id'];

    let empleado:Empleados=this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario;
  }

  accion!:number;
  indice!: number;

  empleados:Array<Empleados>=[];

  cuadroNombre:string = "";
  cuadroApellido:string = "";
  cuadroCargo:string = "";
  cuadroSalario:number = 0;

  modificarEmpleado(){

    if(this.accion == 1){
      let empleado=new Empleados(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadosService.updateEmpleadoServicio(this.indice, empleado);
      this.route.navigate(['']);
    }else{
      this.empleadosService.deleteEmpleadoServicio(this.indice);
      this.route.navigate(['']);
    }
  }

}
