import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPremiadosComponent } from './video-premiados.component';

describe('VideoPremiadosComponent', () => {
  let component: VideoPremiadosComponent;
  let fixture: ComponentFixture<VideoPremiadosComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ VideoPremiadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPremiadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
