import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayMenoresComponent } from './giveaway-menores.component';

describe('GiveawayMenoresComponent', () => {
  let component: GiveawayMenoresComponent;
  let fixture: ComponentFixture<GiveawayMenoresComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayMenoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayMenoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
