import { Component } from '@angular/core';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css']
})
export class GradosComponent {
conversion:number=0;
temperatura:number=0;



convertirGrados(){
  if (document.querySelector('input[id="fahrenheit"]:checked')) {
    this.conversion = (this.temperatura * 1.8) + 32;
  }
  
  if (document.querySelector('input[id="celsius"]:checked')) {
    this.conversion = (this.temperatura - 32) * 0.555;
  }
}
}
