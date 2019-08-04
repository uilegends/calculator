import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CustomDirectiveDemoComponent } from './custom-directive-demo/custom-directive-demo.component';
import { AppboxDirective } from './directive/appbox.directive';
import { SortPipe } from './sort.pipe';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CustomDirectiveDemoComponent,
    AppboxDirective,
    SortPipe,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
