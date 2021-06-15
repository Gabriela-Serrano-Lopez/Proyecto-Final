import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { TiendaComponent } from './tienda/tienda/tienda.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import  {MatRippleModule} from '@angular/material/core';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatGridListResponsiveModule } from '../app/lib/mat-grid-list-responsive/mat-grid-list-responsive.module';
import { ContactoComponent } from './contacto/contacto.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { FooterComponent } from './footer/footer.component';
import {MatListModule} from '@angular/material/list';
import { RegistroComponent } from './registro/registro.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import{ MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { ButtonsModule, WavesModule, CardsModule } from 'angular-bootstrap-md';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import { BuscadorComponent } from './buscador/buscador.component';
import { CheckSessionService } from './services/check-session.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginTelefonoComponent } from './componentes/login/login-telefono/login-telefono.component';
import { LoginComponent } from './componentes/login/login/login.component';
import { RegisterComponent } from './componentes/login/register/register.component';
import { TelefonoComponent } from './componentes/login/telefono/telefono.component';
import { LoginButtonsComponent } from './componentes/login-buttons/login-buttons.component';
import { ProximamenteComponent } from './proximamente/proximamente.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angular2-qrcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
//mora
import { ProductosService } from './services/productos.service';
import { QrComponent } from './componentes/qr/qr.component';
import { GraficasComponent } from './componentes/graficas/graficas.component';
import { ChartsModule } from 'ng2-charts';
import { GraficaUsuarioComponent } from './grafica-usuario/grafica-usuario.component';
import { PipePipe } from './pipes/pipe.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TiendaComponent,
    ArticuloComponent,
    ArticulosComponent,
    ContactoComponent,
    AcercadeComponent,
    PreguntasComponent,
    FooterComponent,
    RegistroComponent,
    IngresoComponent,
    BuscadorComponent,
    LoginTelefonoComponent,
    LoginComponent,
    RegisterComponent,
    TelefonoComponent,
    LoginButtonsComponent,
    ProximamenteComponent,
    PromocionesComponent,
    CrudComponent,
    QrComponent,
    GraficasComponent,
    GraficaUsuarioComponent,
    PipePipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatGridListResponsiveModule,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatCarouselModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule, 
    WavesModule, 
    CardsModule,
    MatChipsModule,
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    NgxQRCodeModule, QRCodeModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [
    CheckSessionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
