import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="https://localhost:44328/api";

  headers = new HttpHeaders().set("Authorization", ""+localStorage.getItem('token'));

  constructor(private http:HttpClient) {}

  
  login(val:any){
    return this.http.post(this.APIUrl+'/Token',val);
  }

  registrar(val:any){
    return this.http.post(this.APIUrl+'/Usuarios',val);
  }

  getPaises():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Paises');
  }

  getEstados(idEstado:string):Observable<any[]>{
    if (idEstado!='') {
      return this.http.get<any>(this.APIUrl+'/Paises/'+idEstado);
    }
    return this.http.get<any>(this.APIUrl+'/Estados');
  }

  getCiudades(idCiudad:string):Observable<any[]>{
    if (idCiudad!='') {
      return this.http.get<any>(this.APIUrl+'/Estados/'+idCiudad);
    }
    return this.http.get<any>(this.APIUrl+'/Ciudades/');    
  }

  getUsuarios(id:string):Observable<any[]>{
    if (id!='') {
      return this.http.get<any>(this.APIUrl+'/Usuarios/'+id, {headers: this.headers});
    }
    return this.http.get<any>(this.APIUrl+'/Usuarios', {headers: this.headers});
  }

  updateUsuarios(val:any){
    return this.http.put(this.APIUrl+'/Usuarios',val, {headers: this.headers});
  }

  deleteUsuarios(val:any){
    return this.http.delete(this.APIUrl+'/Usuarios/'+val, {headers: this.headers});
  }
}