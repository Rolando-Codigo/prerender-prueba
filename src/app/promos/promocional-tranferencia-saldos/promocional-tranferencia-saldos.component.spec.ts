import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionalTranferenciaSaldosComponent } from './promocional-tranferencia-saldos.component';

describe('PromocionalTranferenciaSaldosComponent', () => {
  let component: PromocionalTranferenciaSaldosComponent;
  let fixture: ComponentFixture<PromocionalTranferenciaSaldosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionalTranferenciaSaldosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionalTranferenciaSaldosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
