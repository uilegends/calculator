import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectiveDemoComponent } from './custom-directive-demo.component';

describe('CustomDirectiveDemoComponent', () => {
  let component: CustomDirectiveDemoComponent;
  let fixture: ComponentFixture<CustomDirectiveDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomDirectiveDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectiveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
