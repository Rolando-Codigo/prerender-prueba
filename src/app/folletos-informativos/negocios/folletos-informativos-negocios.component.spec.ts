import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FolletosInformativosNegociosComponent } from './folletos-informativos-negocios.component';

describe('FolletosInformativosNegociosComponent', () => {
  let component: FolletosInformativosNegociosComponent;
  let fixture: ComponentFixture<FolletosInformativosNegociosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FolletosInformativosNegociosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FolletosInformativosNegociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
