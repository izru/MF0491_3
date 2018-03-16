import { Component, OnInit, Input, Output } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  //parametro del padre
  @Input('producto') producto:Producto;
  @Output('compras') comprar: Producto[];
  constructor() { 
    console.log('ProductoComponent constructor');
    this.producto=new Producto() ;
    this.comprar= [];
    
  }

  ngOnInit() {
    console.log('ProductoComponent ngOnInit');
  }

  sumar() {
    console.log('Click mas cantidad');
    this.producto.cantidad++;
  }

  restar() {
    console.log('Click menos cantidad');
    if (this.producto.cantidad>0){
      this.producto.cantidad--;
    }
  }
  
  añadirAlCarro(){
    this.comprar.push(this.producto);
    console.log('cantidad comprada %o %n', this.producto, this.producto.cantidad);

  }

}
