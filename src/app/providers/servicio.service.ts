import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';
import { MOCKS_PRODUCTOS } from './mocks.productos';

@Injectable()
export class ServicioService {
  productos:Producto[]=[];
  constructor() {
    console.log('ServicioService constructor');
   }
   /** retorna todos los productos que tenemos en Stock,
   * detras de los : indica el tipo de dato que retorna
   */
  getAll():Producto[]{
   //meter los datos de los productos
    let producto;
    let jsonData = JSON.parse(MOCKS_PRODUCTOS.stock);
    jsonData.forEach( element => {
      producto = new Producto();
      producto.id=element.id;
      producto.marca=element.marca;
      producto.nombre=element.nombre;
      producto.descripcion=element.descripcion;
      producto.precio=element.precio;
      producto.descuento=element.descuento; //el descuento es sobre 1, un 20% corresponde a 0.2
      producto.foto=element.foto;
      producto.valor=element.valor;
      producto.unidad=element.unidad; 
      producto.pecioUnidad =element.precioUnidad; 
      if(element.descuento>0)
      {
        producto.rebajado =element.precio- (element.precio * (element.descuento/ 100)) ;
      }

 
      this.productos.push(producto);
      });//fin foreach
    return this.productos; 
  }//fin getall

}
