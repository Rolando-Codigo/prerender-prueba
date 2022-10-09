import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayBuenFinComponent } from './giveaway-buen-fin.component';

describe('GiveawayBuenFinComponent', () => {
  let component: GiveawayBuenFinComponent;
  let fixture: ComponentFixture<GiveawayBuenFinComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayBuenFinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayBuenFinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
