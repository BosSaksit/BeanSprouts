import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductListPage } from './return-product-list.page';

describe('ReturnProductListPage', () => {
  let component: ReturnProductListPage;
  let fixture: ComponentFixture<ReturnProductListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnProductListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
