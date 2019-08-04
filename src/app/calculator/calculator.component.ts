import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  flag: boolean = true;
  fn: number;
  ln: number;
  result: number;
  action: string = 'add';

  constructor() { }

  ngOnInit() {
  }

  addTwoNumber() {
    switch (this.action) {
      case "add": {
        this.result = this.fn + this.ln;
        break;
      }
      case "sub": {
        this.result = this.fn - this.ln;
        break;
      }
      case "mul": {
        this.result = this.fn * this.ln;
        break;
      }
      case "divi": {
        this.result = this.fn / this.ln;
        break;
      }
    }
    this.flag = false;
  }

}
