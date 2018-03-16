import { PipeTransform, Pipe } from "@angular/core";
import { Producto } from "../model/producto";

@Pipe({
    name: 'filterPipe'
  })
  export class FilterPipe implements PipeTransform {
  /**
   * filtro para buscar en una coleccion de productos. no es CaseSensitive
   * @param stock : Productos[] array o coleccion de productos
   * @param searchText : string con la descripcion de producto
   */
    transform(stock: Producto[], searchText: string): Producto[] {
        console.log(`Activado filtro de searchText ${searchText}`);
        
      if(!stock) return [];
      if(!searchText) return stock;
      searchText = searchText.toLowerCase();
      let texto ="";
      return stock.filter( productoIt => {
          texto=productoIt.nombre;
          texto=texto.toLowerCase();
          return  texto.includes(searchText);
      });
     }
  
  }