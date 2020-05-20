import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSelloncashPage } from './info-selloncash.page';

describe('InfoSelloncashPage', () => {
  let component: InfoSelloncashPage;
  let fixture: ComponentFixture<InfoSelloncashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSelloncashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSelloncashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
