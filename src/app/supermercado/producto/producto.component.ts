import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  //parametro del padre
  @Input('productoParametro') producto:Producto;
  constructor() { 
    console.log('ProductoComponent constructor');
    this.producto=new Producto() ;
  }

  ngOnInit() {
    console.log('ProductoComponent ngOnInit');
  }

}
