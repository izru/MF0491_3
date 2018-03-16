export class Producto{
    id:number;
    marca:string;
    descripcion:string;
    precio:number;
    descuento: number; //el descuento es sobre 1, un 20% corresponde a 0.2
    foto: string;
    valor:number;
    unidad:string;

    constructor(){
        console.log('Producto constructor');
        this.id=-1;
        this.marca="";
        this.descripcion="";
        this.precio=0;
        this.descuento= 0;
        this.foto= "";
        this.valor=0;
        this.unidad="";
    }
}