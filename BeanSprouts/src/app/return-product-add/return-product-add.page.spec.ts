import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnProductAddPage } from './return-product-add.page';

describe('ReturnProductAddPage', () => {
  let component: ReturnProductAddPage;
  let fixture: ComponentFixture<ReturnProductAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnProductAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
