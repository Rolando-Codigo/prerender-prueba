import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayAhorroCategoriasComponent } from './giveaway-ahorro-categorias.component';

describe('GiveawayAhorroComponent', () => {
  let component: GiveawayAhorroCategoriasComponent;
  let fixture: ComponentFixture<GiveawayAhorroCategoriasComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayAhorroCategoriasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayAhorroCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
