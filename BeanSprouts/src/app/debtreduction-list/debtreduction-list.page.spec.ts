import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtreductionListPage } from './debtreduction-list.page';

describe('DebtreductionListPage', () => {
  let component: DebtreductionListPage;
  let fixture: ComponentFixture<DebtreductionListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtreductionListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtreductionListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
