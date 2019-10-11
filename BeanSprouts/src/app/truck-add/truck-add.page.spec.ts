import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckAddPage } from './truck-add.page';

describe('TruckAddPage', () => {
  let component: TruckAddPage;
  let fixture: ComponentFixture<TruckAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
