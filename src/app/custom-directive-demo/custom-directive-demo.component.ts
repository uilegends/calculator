import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directive-demo',
  templateUrl: './custom-directive-demo.component.html',
  styleUrls: ['./custom-directive-demo.component.css']
})
export class CustomDirectiveDemoComponent implements OnInit {

  countries = ['indian', 'usa', 'us', 'canada', 'china'];
  constructor() { }

  ngOnInit() {
  }

}
