import { Component } from '@angular/core';

interface Cinecon{
  valor:number;
  nombre:string;
}

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
precioBol:number=12;
total:number=0;
cantCompr:number=0;
descuento:number=0;
nombre:string='';
valorT:number=0;
mensaje:string='';
cantBol!:number;

tarjeta:Cinecon[]=[
{
  valor: 1,
  nombre: "Si"
},
{
  valor: 2,
  nombre: "No"
}
]


calculoPrecio(){
  const maxBol = 7*this.cantCompr;

  if(this.cantBol>maxBol){
    const mensaje = 'No se pueden comprar más de 7 boletos por persona.';
    let nombre = '';
    this.nombre = nombre;
    this.mensaje=mensaje;
    this.total=0;
  }else{
      if(this.cantBol == 3 || this.cantBol == 4 || this.cantBol == 5){
        this.mensaje='¡Boletos comprados con éxito!';
        if(this.valorT==1){
          const descuento = ((this.cantBol)*this.precioBol)-(((this.cantBol))*(this.precioBol)/(100*0.10));
          this.descuento=((descuento)/(100*0.10));
          this.total=descuento-this.descuento;
        }else{
          const descuento = ((this.cantBol)*this.precioBol)-(((this.cantBol))*(this.precioBol)/(100*0.10));
          this.total= descuento;
        }
      } if(this.cantBol > 5 ){
        this.mensaje='¡Boletos comprados con éxito!';
          if(this.valorT==1){
            const descuento = (((this.cantBol)*this.precioBol)-(((this.cantBol))*(this.precioBol)*(0.15)));
            this.descuento = ((descuento)*(0.10));
            this.total = descuento - this.descuento;
          }else{
            const descuento = (((this.cantBol)*this.precioBol)-(((this.cantBol))*(this.precioBol)*(0.15)));
            this.total= descuento;
          }
      } else{
        this.mensaje='¡Boletos comprados con éxito!';
          if(this.valorT==1){
            const descuento = (((this.cantBol)*this.precioBol));
            this.descuento = ((descuento)/(100*0.10));
            this.total=descuento-this.descuento;
          }else{
            this.total = this.precioBol * this.cantBol;
          } 
      }
  }
}
}
