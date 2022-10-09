import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayReembolsoComponent } from './giveaway-reembolso.component';

describe('GiveawayReembolsoComponent', () => {
  let component: GiveawayReembolsoComponent;
  let fixture: ComponentFixture<GiveawayReembolsoComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayReembolsoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayReembolsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
