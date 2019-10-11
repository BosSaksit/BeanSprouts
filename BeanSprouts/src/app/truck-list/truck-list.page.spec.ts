import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TruckListPage } from './truck-list.page';

describe('TruckListPage', () => {
  let component: TruckListPage;
  let fixture: ComponentFixture<TruckListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TruckListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TruckListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
