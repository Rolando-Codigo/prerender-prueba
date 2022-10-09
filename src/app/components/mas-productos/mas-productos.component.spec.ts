import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasProductosComponent } from './mas-productos.component';

describe('MasProductosComponent', () => {
  let component: MasProductosComponent;
  let fixture: ComponentFixture<MasProductosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ MasProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
