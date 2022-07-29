import { Component } from '@angular/core';
import { Empleados } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado Empleados';

  empleados:Array<Empleados>=[
    new Empleados("Mau", "Torre", "Presidente", 8000),
    new Empleados("Ricky", "rres", "VicePresidente", 8000),
    new Empleados("Pedro", "To", "Ministro de economia", 8000),
    new Empleados("Juan", "Torres", "Jefe del INADI", 8000),
  ];

  cuadroNombre:String = "";
  cuadroApellido:String = "";
  cuadroCargo:String = "";
  cuadroSalario:number = 0;
}
