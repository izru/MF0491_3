import { Component, OnInit } from '@angular/core';
import { Producto } from '../model/producto';
import { ServicioService } from '../providers/servicio.service';

@Component({
  selector: 'app-supermercado',
  templateUrl: './supermercado.component.html',
  styleUrls: ['./supermercado.component.scss']
})
export class SupermercadoComponent implements OnInit {
  stock:Producto[];
  producto:Producto;
  constructor(public servicioService:ServicioService) { 
    console.log('SupermercadoComponent constructor');
    //inicializacion de variables
    this.stock=new Array<Producto>();
    this.producto=new Producto();
  }

  ngOnInit() {
    console.log('SupermercadoComponent ngOnInit');
  }

}
