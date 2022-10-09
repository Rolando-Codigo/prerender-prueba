import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayDiarioComponent } from './giveaway-diario.component';

describe('GiveawayDiarioComponent', () => {
  let component: GiveawayDiarioComponent;
  let fixture: ComponentFixture<GiveawayDiarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
