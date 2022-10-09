import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaHeyBancoComponent } from './bienvenida-hey-banco.component';

describe('BienvenidaHeyBancoComponent', () => {
  let component: BienvenidaHeyBancoComponent;
  let fixture: ComponentFixture<BienvenidaHeyBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienvenidaHeyBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidaHeyBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
