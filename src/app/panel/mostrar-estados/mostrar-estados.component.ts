import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-mostrar-estados',
  templateUrl: './mostrar-estados.component.html',
  styleUrls: ['./mostrar-estados.component.css']
})
export class MostrarEstadosComponent implements OnInit {

  paises:any=[];
  estados:any=[];
  pais:string='';
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
}
