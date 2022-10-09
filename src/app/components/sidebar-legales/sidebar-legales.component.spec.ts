import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLegalesComponent } from './sidebar-legales.component';

describe('SidebarLegalesComponent', () => {
  let component: SidebarLegalesComponent;
  let fixture: ComponentFixture<SidebarLegalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLegalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLegalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
