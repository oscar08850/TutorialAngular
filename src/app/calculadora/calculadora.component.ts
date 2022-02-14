import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  numero: number;
  resultado: number;
  constructor() { 
    console.log("Estoy en constructor")

  }

  ngOnInit() {
    console.log("Inicio el componente")
  }

  Duplicar () {
    console.log (`Voy a duplicar ${this.numero} y el resultado es:`)
    this.resultado = this.numero * 2;
    console.log (this.resultado) 

  }

}
