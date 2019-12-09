import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillTablePage } from './bill-table.page';

describe('BillTablePage', () => {
  let component: BillTablePage;
  let fixture: ComponentFixture<BillTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillTablePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
