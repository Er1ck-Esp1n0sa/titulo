import { Component, OnInit } from '@angular/core';
import { formulaArea } from '../formula/Area_triangulo';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  base : number = 0;
  altura: number = 0;
  resultado: any;

  ngOnInit(): void {
  }

  Area(){
    let result;
    result = formulaArea(this.base,this.altura)
    this.resultado = result
  }

}
