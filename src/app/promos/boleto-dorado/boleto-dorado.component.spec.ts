import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoDoradoComponent } from './boleto-dorado.component';

describe('BoletoDoradoComponent', () => {
  let component: BoletoDoradoComponent;
  let fixture: ComponentFixture<BoletoDoradoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ BoletoDoradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoDoradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
