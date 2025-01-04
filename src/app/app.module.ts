import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import{SharedService} from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MostrarUsuariosComponent } from './panel/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarPaisesComponent } from './panel/mostrar-paises/mostrar-paises.component';
import { MostrarEstadosComponent } from './panel/mostrar-estados/mostrar-estados.component';
import { MostrarCiudadesComponent } from './panel/mostrar-ciudades/mostrar-ciudades.component';
import { EditarUsuarioComponent } from './panel/editar-usuario/editar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    MostrarUsuariosComponent,
    MostrarPaisesComponent,
    MostrarEstadosComponent,
    MostrarCiudadesComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }