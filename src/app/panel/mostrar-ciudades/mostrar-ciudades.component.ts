import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-mostrar-ciudades',
  templateUrl: './mostrar-ciudades.component.html',
  styleUrls: ['./mostrar-ciudades.component.css']
})
export class MostrarCiudadesComponent implements OnInit {
  ciudades:any=[];
  estados:any=[];
  paises:any=[];
  pais:string='';
  estado:string='';
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.obtenerPaises();
  }
  
  obtenerPaises(){  
    this.service.getPaises().subscribe(data=>{
      this.paises = data;      
    });
  }
  obtenerEstadosPais(){
    this.service.getEstados(this.pais).subscribe(data=>{
      this.estados = data;      
    });
  }
  
  obtenerCiudadesEstado(){
    this.service.getCiudades(this.estado).subscribe(data=>{    
      this.ciudades = data;      
    });
  }
}
