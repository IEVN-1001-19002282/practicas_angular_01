import { Component } from '@angular/core';

@Component({
  selector: 'app-multiplicacion-axb',
  templateUrl: './multiplicacion-axb.component.html',
  styleUrls: ['./multiplicacion-axb.component.css']
})
export class MultiplicacionAxbComponent {
num1=0;
num2=0;
res=0;
cadena:string='';

calcular():void{
  this.cadena="";
  this.res = 0;
  let n = this.num2;
  for(let i = 1; i < this.num1; i++){
      n = n + this.num2;
      this.cadena += this.num2.toString() + "+";
  }

  this.cadena += this.num2.toString() + "=" + n;


  
}

/*for(let i = 0; i == this.num1; i++){
  for(let j = 1; j == this.num1; j++){
    this.res = i * j;
    console.log(`${i} x ${j} = ${this.res}`);
  }
  
}*/
}
