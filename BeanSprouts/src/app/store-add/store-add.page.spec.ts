import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAddPage } from './store-add.page';

describe('StoreAddPage', () => {
  let component: StoreAddPage;
  let fixture: ComponentFixture<StoreAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
