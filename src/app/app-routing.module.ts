import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// El siguiente comando importa un componente a nuestro archivo de rutas
// El componente que importamos se llama LoginComponent y es importado desde el directorio ./components/login/
import {LoginComponent} from './components/login/login.component';
import {InicioComponent} from './components/inicio/inicio.component';

// Esto es un arreglo de rutas donde vamos a meter todas
// las rutas de nuestro proyecto
const routes: Routes = [
  // Un objeto se crea entre corchetes
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
