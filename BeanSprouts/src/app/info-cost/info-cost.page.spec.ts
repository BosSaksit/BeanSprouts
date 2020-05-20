import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCostPage } from './info-cost.page';

describe('InfoCostPage', () => {
  let component: InfoCostPage;
  let fixture: ComponentFixture<InfoCostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoCostPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoCostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
