import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-mostrar-paises',
  templateUrl: './mostrar-paises.component.html',
  styleUrls: ['./mostrar-paises.component.css']
})
export class MostrarPaisesComponent implements OnInit {
  paises:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.obtenerPaises();
  }

  obtenerPaises(){  
    this.service.getPaises().subscribe(data=>{
      this.paises = data;
      console.log(data);
      
    });
  }

}
