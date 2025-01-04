import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  constructor(private service:SharedService) { }

  datos:any=[];
  paises:any=[];
  estados:any=[];
  ciudades:any=[];
  usuario:string='';
  ciudad:string='';
  pais:string='';
  estado:string='';
  password:string='';
  ngOnInit(): void {
    this.obtenerDatos();
  }

  actualizar(){ 
    var val = {
      usuario1: this.usuario,
      idCiudad:this.ciudad
           
    }
    this.service.updateUsuarios(val).subscribe(data=>{
      console.log('dd');      
      console.log(data);
      console.log('dd');
      
    });
  }

  obtenerDatos(){      
    let id = localStorage.getItem('id');
    this.service.getUsuarios(''+id).subscribe(data=>{
      this.datos = data;
      this.usuario = this.datos.usuario1;
    });
  }


  obtenerPaises(){  
    this.service.getPaises().subscribe(data=>{
      this.paises = data;
    });
  }


  obtenerEstados(){
    this.service.getEstados(this.pais).subscribe(data=>{
      this.estados = data;
    });
  }

  obtenerCiudades(){
    console.log(this.estado);
    
    this.service.getCiudades(this.estado).subscribe(data=>{
      this.ciudades = data;
    });
  }
}
