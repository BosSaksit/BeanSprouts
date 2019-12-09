import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtreductionAddPage } from './debtreduction-add.page';

describe('DebtreductionAddPage', () => {
  let component: DebtreductionAddPage;
  let fixture: ComponentFixture<DebtreductionAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtreductionAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtreductionAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
