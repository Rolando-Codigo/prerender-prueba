import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveawayRegistroEmbajadoresComponent } from './giveaway-registro-embajadores.component';

describe('GiveawayRegistroEmbajadoresComponent', () => {
  let component: GiveawayRegistroEmbajadoresComponent;
  let fixture: ComponentFixture<GiveawayRegistroEmbajadoresComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ GiveawayRegistroEmbajadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveawayRegistroEmbajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
