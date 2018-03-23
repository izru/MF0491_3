import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../model/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  comprar: Producto[];
  //parametro del padre
  @Input('producto') producto:Producto;  
  //evento
  @Output () carrito = new EventEmitter();
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

  // Cuando se lance el evento click en la plantilla llamaremos a este método
  lanzar(event){
    // Usamos el método emit
    this.carrito.emit({comprar: this.comprar});
}

}
