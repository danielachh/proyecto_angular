import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdopcionesComponent } from './adopciones/adopciones.component';
import { AgregarMascotasComponent } from './agregar-mascotas/agregar-mascotas.component';
import { LoginComponent } from './login/login.component';
import { MascotasComponent } from './mascotas/mascotas.component';

const routes: Routes = [
  {path: 'mascotas',component:MascotasComponent},
  {path:'agregar-mascotas', component:AgregarMascotasComponent},
  {path:'login', component:LoginComponent},
  {path:'adopciones', component:AdopcionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
