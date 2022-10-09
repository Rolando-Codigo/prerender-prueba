import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuletaWidgetComponent } from './ruleta-widget.component';

describe('RuletaWidgetComponent', () => {
  let component: RuletaWidgetComponent;
  let fixture: ComponentFixture<RuletaWidgetComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ RuletaWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuletaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
