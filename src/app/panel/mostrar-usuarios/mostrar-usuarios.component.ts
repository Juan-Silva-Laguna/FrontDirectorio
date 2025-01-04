import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-mostrar-usuarios',
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {

  constructor(private service:SharedService) { }
  usuarios:any=[];

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){  
    this.service.getUsuarios('').subscribe(data=>{
      this.usuarios = data;
    });
  }

}
