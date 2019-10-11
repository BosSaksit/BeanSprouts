import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckEditPage } from './truck-edit.page';

describe('TruckEditPage', () => {
  let component: TruckEditPage;
  let fixture: ComponentFixture<TruckEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
