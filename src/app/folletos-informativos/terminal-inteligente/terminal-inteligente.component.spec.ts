import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalInteligenteComponent } from './terminal-inteligente.component';

describe('TerminalInteligenteComponent', () => {
  let component: TerminalInteligenteComponent;
  let fixture: ComponentFixture<TerminalInteligenteComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalInteligenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminalInteligenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
