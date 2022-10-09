import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionalEmbajadoresComponent } from './promocional-embajadores.component';

describe('PromocionalEmbajadoresComponent', () => {
  let component: PromocionalEmbajadoresComponent;
  let fixture: ComponentFixture<PromocionalEmbajadoresComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ PromocionalEmbajadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionalEmbajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
