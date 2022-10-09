import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayCatarInteresComponent } from './giveaway-catar-interes.component';

describe('GiveawayCatarInteresComponent', () => {
  let component: GiveawayCatarInteresComponent;
  let fixture: ComponentFixture<GiveawayCatarInteresComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayCatarInteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayCatarInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
