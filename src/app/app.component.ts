import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private service:SharedService) { }

  title = 'angular10';
  show=0;
  panel=0;
  paises:any=[];
  estados:any=[];
  ciudades:any=[];
  mostrarEstado=0;
  mostrarCiudad=0;
  profileForm = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl(''),
    pais: new FormControl(0),
    estado: new FormControl(0),
    ciudad: new FormControl(0),
  });

  ngOnInit(): void {
    this.obtenerPaises();
  }

  ingresar(){
    var val = {
      usuario: this.profileForm.value.usuario,
      password:this.profileForm.value.password
    }

    this.service.login(val).subscribe(res=>{
      let recibe:any=[];
      recibe = res;
      localStorage.setItem("token", "Bearer "+recibe.token);   
      localStorage.setItem("id", recibe.id);   
      if (recibe) {
        this.panel=1;
      }
    });
  }

  registrar(){ 
    var val = {
      idCiudad:this.profileForm.value.ciudad,
      usuario1: this.profileForm.value.usuario,
      password:this.profileForm.value.password      
    }
    this.service.registrar(val).subscribe(data=>{
      console.log(data);
    });
  }

  obtenerPaises(){  
    this.service.getPaises().subscribe(data=>{
      this.paises = data;
    });
  }


  obtenerEstados(){
    this.service.getEstados(this.profileForm.value.pais).subscribe(data=>{
      this.estados = data;
    });
    this.mostrarEstado=1;
  }

  obtenerCiudades(){
    console.log(this.profileForm.value.estado);
    
    this.service.getCiudades(this.profileForm.value.estado).subscribe(data=>{
      this.ciudades = data;
    });
    this.mostrarCiudad=1;
  }
}
