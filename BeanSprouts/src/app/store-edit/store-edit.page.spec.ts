import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreEditPage } from './store-edit.page';

describe('StoreEditPage', () => {
  let component: StoreEditPage;
  let fixture: ComponentFixture<StoreEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
