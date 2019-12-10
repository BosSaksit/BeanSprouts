import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarmainComponent } from './barmain.component';

describe('BarmainComponent', () => {
  let component: BarmainComponent;
  let fixture: ComponentFixture<BarmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarmainComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
