import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSellcreditPage } from './info-sellcredit.page';

describe('InfoSellcreditPage', () => {
  let component: InfoSellcreditPage;
  let fixture: ComponentFixture<InfoSellcreditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoSellcreditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSellcreditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
