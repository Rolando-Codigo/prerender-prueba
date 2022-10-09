import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoletoDoradoInformativoComponent } from './boleto-dorado-informativo.component';

describe('BoletoDoradoInformativoComponent', () => {
  let component: BoletoDoradoInformativoComponent;
  let fixture: ComponentFixture<BoletoDoradoInformativoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ BoletoDoradoInformativoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoletoDoradoInformativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
