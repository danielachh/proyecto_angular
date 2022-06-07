import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { Mascotas } from './mascotas';
import { MascotasService } from './mascotas.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto_angular';
  dataSource!: MatTableDataSource<Mascotas>;

  constructor(private router:Router,private mascotasServicio:MascotasService){
  }
  public mascotas: Mascotas[]=[];
  displayedColumns: string[] = ['id','nombre','edad'];
 
  

}

