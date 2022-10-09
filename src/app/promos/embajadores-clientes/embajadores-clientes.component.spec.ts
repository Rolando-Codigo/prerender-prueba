import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbajadoresClientesComponent } from './embajadores-clientes.component';

describe('EmbajadoresClientesComponent', () => {
  let component: EmbajadoresClientesComponent;
  let fixture: ComponentFixture<EmbajadoresClientesComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ EmbajadoresClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbajadoresClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
