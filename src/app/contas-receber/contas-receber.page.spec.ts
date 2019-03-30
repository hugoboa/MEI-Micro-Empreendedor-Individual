import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasReceberPage } from './contas-receber.page';

describe('ContasReceberPage', () => {
  let component: ContasReceberPage;
  let fixture: ComponentFixture<ContasReceberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasReceberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasReceberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
