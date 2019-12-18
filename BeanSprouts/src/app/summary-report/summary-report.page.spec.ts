import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryReportPage } from './summary-report.page';

describe('SummaryReportPage', () => {
  let component: SummaryReportPage;
  let fixture: ComponentFixture<SummaryReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryReportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
