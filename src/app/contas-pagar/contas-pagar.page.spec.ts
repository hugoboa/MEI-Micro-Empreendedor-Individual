import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContasPagarPage } from './contas-pagar.page';

describe('ContasPagarPage', () => {
  let component: ContasPagarPage;
  let fixture: ComponentFixture<ContasPagarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContasPagarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContasPagarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
