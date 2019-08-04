import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAppbox]'
})
export class AppboxDirective implements AfterViewInit {

  constructor(private ele: ElementRef) { }

  ngAfterViewInit() {
    this.ele.nativeElement.style.color = "red";
    this.ele.nativeElement.style.border = "1px solid #333"
  }

}
