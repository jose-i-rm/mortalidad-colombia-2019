import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CausasChart } from './causas-chart';

describe('CausasChart', () => {
  let component: CausasChart;
  let fixture: ComponentFixture<CausasChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CausasChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CausasChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
