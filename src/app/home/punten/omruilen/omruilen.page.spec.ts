import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmruilenPage } from './omruilen.page';

describe('OmruilenPage', () => {
  let component: OmruilenPage;
  let fixture: ComponentFixture<OmruilenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmruilenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmruilenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
