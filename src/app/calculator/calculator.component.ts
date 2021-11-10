import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public num1:number;
  public num2:number;
  public result:number;

  additionNum(){
    this.result = this.num1 + this.num2;
  }

  subtractionNum(){
    this.result = this.num1 - this.num2;
  }

  multiplicationNum(){
    this.result = this.num1 * this.num2
  }

  divisionNum(){
    this.result = this.num1 / this.num2
  }

}
