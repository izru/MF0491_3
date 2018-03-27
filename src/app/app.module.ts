import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//librerias para formulario
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';

// Importar Servicio
import { ServicioService } from './providers/servicio.service';

//Importar Pipes
import { FilterPipe } from './pipes/filter.pipe';

//Importar Componentes
import { AppComponent } from './app.component';
import { SupermercadoComponent } from './supermercado/supermercado.component';
import { ProductoComponent } from './supermercado/producto/producto.component';
import { CarritoComponent } from './supermercado/carrito/carrito.component';



@NgModule({
  declarations: [
    AppComponent,
    SupermercadoComponent,
    ProductoComponent,
    FilterPipe,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    ServicioService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
