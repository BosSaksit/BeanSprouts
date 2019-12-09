import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillEditDataPage } from './bill-edit-data.page';

describe('BillEditDataPage', () => {
  let component: BillEditDataPage;
  let fixture: ComponentFixture<BillEditDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillEditDataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillEditDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
