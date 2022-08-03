import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProjectComponentComponent } from './project-component/project-component.component';
import { QuinesComponentsComponent } from './quines-components/quines-components.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponentComponent } from './update-component/update-component.component';

const appRoutes:Routes=[
  {path: '' ,component:HomeComponentComponent},
  {path: 'proyectos' ,component:ProjectComponentComponent},
  {path: 'quienes' ,component:QuinesComponentsComponent},
  {path: 'contacto' ,component:ContactoComponentComponent},
  {path: 'actualiza/:id' ,component:UpdateComponentComponent},
  {path: '**' ,component:ContactoComponentComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProjectComponentComponent,
    QuinesComponentsComponent,
    ContactoComponentComponent,
    UpdateComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
