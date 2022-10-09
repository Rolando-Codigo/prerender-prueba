import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayDifiereComponent } from './giveaway-difiere.component';

describe('GiveawayDifiereComponent', () => {
  let component: GiveawayDifiereComponent;
  let fixture: ComponentFixture<GiveawayDifiereComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayDifiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayDifiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
