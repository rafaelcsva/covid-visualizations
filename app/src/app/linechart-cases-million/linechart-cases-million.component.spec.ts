import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinechartCasesMillionComponent } from './linechart-cases-million.component';

describe('LinechartCasesMillionComponent', () => {
  let component: LinechartCasesMillionComponent;
  let fixture: ComponentFixture<LinechartCasesMillionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinechartCasesMillionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinechartCasesMillionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
