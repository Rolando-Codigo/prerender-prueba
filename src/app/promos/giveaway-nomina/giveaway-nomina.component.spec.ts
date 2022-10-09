import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayNominaComponent } from './giveaway-nomina.component';

describe('GiveawayNominaComponent', () => {
  let component: GiveawayNominaComponent;
  let fixture: ComponentFixture<GiveawayNominaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayNominaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayNominaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
