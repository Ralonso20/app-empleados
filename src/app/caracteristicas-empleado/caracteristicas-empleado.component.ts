import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styleUrls: ['./caracteristicas-empleado.component.css']
})
export class CaracteristicasEmpleadoComponent implements OnInit {

  @Output() caracteristicasEmpleado = new EventEmitter<string>();
  
  constructor(private servicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  outPutCaracteristica(value: string){
    this.servicio.muestraMensaje(value);
    this.caracteristicasEmpleado.emit(value);
  }
}
