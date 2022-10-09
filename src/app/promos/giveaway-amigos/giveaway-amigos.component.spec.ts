import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayAmigosComponent } from './giveaway-amigos.component';

describe('GiveawayAmigosComponent', () => {
  let component: GiveawayAmigosComponent;
  let fixture: ComponentFixture<GiveawayAmigosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveawayAmigosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
