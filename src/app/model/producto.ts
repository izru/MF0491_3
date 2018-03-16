export class Producto{
    id:number;
    marca:string;
    nombre:string;
    descripcion:string;
    precio:number;
    descuento: number; //el descuento es sobre 1, un 20% corresponde a 0.2
    foto: string;
    valor:number;
    unidad:string;
    precioUnidad:string;
    //atributo calculado
    rebajado:number;
    cantidad:number;

    constructor(){
        console.log('Producto constructor');
        this.id=-1;
        this.marca="";
        this.nombre="";
        this.descripcion="";
        this.precio=0;
        this.descuento= 0;
        this.foto= "";
        this.valor=0;
        this.unidad=""; 
        this.precioUnidad="";      
        this.rebajado=0;
        this.cantidad=0;
    }
}