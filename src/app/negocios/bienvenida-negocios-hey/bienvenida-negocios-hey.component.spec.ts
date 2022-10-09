import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienvenidaNegociosHeyComponent } from './bienvenida-negocios-hey.component';

describe('BienvenidaNegociosHeyComponent', () => {
  let component: BienvenidaNegociosHeyComponent;
  let fixture: ComponentFixture<BienvenidaNegociosHeyComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ BienvenidaNegociosHeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BienvenidaNegociosHeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
