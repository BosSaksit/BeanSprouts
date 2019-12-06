import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopAddPage } from './shop-add.page';

describe('ShopAddPage', () => {
  let component: ShopAddPage;
  let fixture: ComponentFixture<ShopAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
