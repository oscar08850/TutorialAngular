import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoTutorial';
  numero: number;
  resultado: number;
  Duplicar () {
    console.log (`Voy a duplicar ${this.numero} y el resultado es:`)
    this.resultado = this.numero * 2;
    console.log (this.resultado) 

  }
}
