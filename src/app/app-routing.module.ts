import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarMascotasComponent } from './agregar-mascotas/agregar-mascotas.component';
import { MascotasComponent } from './mascotas/mascotas.component';

const routes: Routes = [
  {path: 'mascotas',component:MascotasComponent},
  {path:'Agregar', component:AgregarMascotasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
