import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDebtPage } from './info-debt.page';

describe('InfoDebtPage', () => {
  let component: InfoDebtPage;
  let fixture: ComponentFixture<InfoDebtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDebtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoDebtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
