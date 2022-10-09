import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayProteccionHeyComponent } from './giveaway-proteccion-hey.component';

describe('GiveawayProteccionHeyComponent', () => {
  let component: GiveawayProteccionHeyComponent;
  let fixture: ComponentFixture<GiveawayProteccionHeyComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayProteccionHeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayProteccionHeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
