import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../mascotas.service';
import { Mascotas } from '../mascotas';
@Component({
  selector: 'app-agregar-mascotas',
  templateUrl: './agregar-mascotas.component.html',
  styleUrls: ['./agregar-mascotas.component.css']
})
export class AgregarMascotasComponent implements OnInit {
  mascotas: Mascotas={
    id: 0,
    nombre: '',
    edad: 0
  };

  constructor(private mascota:MascotasService) { }
  public cargando=false;

  ngOnInit(): void {
  }
  addMascotas(){
    this.mascota.addMascotas(this.mascotas);
  }
}
