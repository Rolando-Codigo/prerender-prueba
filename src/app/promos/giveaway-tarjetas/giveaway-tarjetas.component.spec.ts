import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayTarjetasComponent } from './giveaway-tarjetas.component';

describe('GiveawayTarjetasComponent', () => {
  let component: GiveawayTarjetasComponent;
  let fixture: ComponentFixture<GiveawayTarjetasComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayTarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
