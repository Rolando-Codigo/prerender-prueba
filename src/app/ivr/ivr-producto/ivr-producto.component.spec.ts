import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IvrProductoComponent } from './ivr-producto.component';

describe('IvrProductoComponent', () => {
  let component: IvrProductoComponent;
  let fixture: ComponentFixture<IvrProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IvrProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IvrProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
