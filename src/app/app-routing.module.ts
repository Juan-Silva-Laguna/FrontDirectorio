import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MostrarUsuariosComponent } from './panel/mostrar-usuarios/mostrar-usuarios.component';
import { MostrarPaisesComponent } from './panel/mostrar-paises/mostrar-paises.component';
import { MostrarEstadosComponent } from './panel/mostrar-estados/mostrar-estados.component';
import { MostrarCiudadesComponent } from './panel/mostrar-ciudades/mostrar-ciudades.component';
import { EditarUsuarioComponent } from './panel/editar-usuario/editar-usuario.component';

import {PanelComponent} from './panel/panel.component';
import {AppComponent} from './app.component';
const routes: Routes = [
{path: 'panel', component:PanelComponent},
{path: 'login', component:AppComponent},

{path: 'mostrar-usuarios', component:MostrarUsuariosComponent},
{path: 'mostrar-paises', component:MostrarPaisesComponent},
{path: 'mostrar-estados', component:MostrarEstadosComponent},
{path: 'mostrar-ciudades', component:MostrarCiudadesComponent},
{path: 'editar-usuario', component:EditarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
