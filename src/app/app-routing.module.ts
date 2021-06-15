import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { RegistroComponent } from './registro/registro.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { ArticuloComponent } from '../app/articulo/articulo.component';
import { RegisterComponent } from './componentes/login/register/register.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { ProximamenteComponent } from './proximamente/proximamente.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { TelefonoComponent } from './componentes/login/telefono/telefono.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { GraficaUsuarioComponent } from './grafica-usuario/grafica-usuario.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'acercade', component: AcercadeComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'ingreso', component: IngresoComponent },
  { path: 'verificar-telefono', component: TelefonoComponent },
  { path: 'articulo/:id', component: ArticuloComponent },
  { path: 'buscador/:nombre', component: BuscadorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'promociones', component: PromocionesComponent},
  { path: 'proximamente', component: ProximamenteComponent},
  { path: 'estadisticas', component: GraficaUsuarioComponent},
  { path: 'crud', component: CrudComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
