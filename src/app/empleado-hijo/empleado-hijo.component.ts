import { Component, Input, OnInit } from '@angular/core';
import { Empleados } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {
  @Input() empleado_para_hijo!:Empleados;
  @Input() indice_para_hijo!:number;
  constructor() { }

  ngOnInit(): void {
  }

}
