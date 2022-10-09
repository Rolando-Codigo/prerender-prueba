import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEntregaComponent } from './info-entrega.component';

describe('InfoEntregaComponent', () => {
  let component: InfoEntregaComponent;
  let fixture: ComponentFixture<InfoEntregaComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
