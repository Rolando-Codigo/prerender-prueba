import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DifiereComprasHeyProComponent } from './difiere-compras-hey-pro.component';

describe('DifiereComprasHeyProComponent', () => {
  let component: DifiereComprasHeyProComponent;
  let fixture: ComponentFixture<DifiereComprasHeyProComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ DifiereComprasHeyProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DifiereComprasHeyProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
